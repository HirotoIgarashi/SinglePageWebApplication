/*
 * routes.js - ルーティングを提供するモジュール
*/

/*jslint          node    : true, continue  : true,
  devel   : true, indent  : 2,    maxerr    : 50,
  newcap  : true, nomen   : true, plusplus  : true,
  regexp  : true, sloppy  : true, vars      : false,
  white   : true
*/
/*global */

// --------------------- モジュールスコープ変数開始 ---------------
'use strict';
var
  configRoutes,
  crud        = require( './crud' ),
  chat        = require( './chat' ),
  makeMongoId = crud.makeMongoId;
// --------------------- モジュールスコープ変数終了 ---------------

// --------------------- ユーティリティメソッド開始 ---------------
// --------------------- ユーティリティメソッド終了 ---------------

// --------------------- パブリックメソッド開始 -------------------
configRoutes = function ( app, server ) {
  // 以下の設定はすべてルート用である
  app.get( '/', function ( request, response ) {
    response.redirect( './spa.html' );
  });

  app.all( '/:obj_type/*?', function ( request, response, next ) {
    response.contentType( 'json' );
    next();
  });

  // Read
  app.get( '/:obj_type/list', function ( request, response ) {
    crud.read(
      request.params.obj_type,
      {}, {},
      function ( map_list ) { response.send( map_list ); }
    );
  });

  // Create
  app.post( '/:obj_type/create', function ( request, response ) {
    crud.construct(
      request.params.obj_type,
      request.body,
      function ( result_map ) { response.send( result_map ); }
    );
  });

  // Read
  app.get( '/:obj_type/read/:id', function ( request, response ) {
    crud.read(
      request.params.obj_type,
      { _id : makeMongoId( request.params.id ) },
      {},
      request.body,
      function ( map_list ) { response.send( map_list ); }
    );
  });

  // Update
  app.post( '/:obj_type/update/:id', function ( request, response ) {
    crud.update(
      request.params.obj_type,
      { _id : makeMongoId( request.params.id ) },
      request.body,
      function ( result_map ) { response.send( result_map ); }
    );
  });

  // Delete
  app.get( '/:obj_type/delete/:id', function ( request, response ) {
    crud.destroy(
      request.params.obj_type,
      { _id : makeMongoId( request.params.id ) },
      function ( result_map ) { response.send( result_map ); }
    );
  });

  chat.connect( server );
};

module.exports = { configRoutes : configRoutes };
// --------------------- パブリックメソッド終了 -------------------

// --------------------- モジュール初期化開始 -------------------
// --------------------- モジュール初期化終了 -------------------
