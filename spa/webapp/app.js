/*
 * app.js - 簡単なExpressサーバ
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
  http      = require( 'http' ),
  express   = require( 'express' ),

  app       = express(),
  server    = http.createServer( app );
// --------------------- モジュールスコープ変数終了 ---------------

// --------------------- サーバ構成開始 ---------------------------
app.get( '/', function ( request, response ) {
  response.send( 'Hello Express' );
});
// --------------------- サーバ構成終了 ---------------------------

// --------------------- サーバ起動開始 ---------------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port , app.settings.env
);
// --------------------- サーバ起動終了 ---------------------------
