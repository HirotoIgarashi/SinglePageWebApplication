/*
 * nodeunit_suite.js
 * SPAの単体テストスイーツ
*/

/*jslint          node    : true, continue  : true,
  devel   : true, indent  : 2,    maxerr    : 50,
  newcap  : true, nomen   : true, plusplus  : true,
  regexp  : true, sloppy  : true, vars      : false,
  white   : true
*/
/*global $, spa */

// サードパーティモジュールとグローバル
var
  jsdom     = require( 'jsdom' ).jsdom, // add
  document  = jsdom(),
  window    = document.defaultView;

global.jQuery = require( 'jquery' )(window);
global.TAFFY  = require( './js/jq/taffy.js' ).taffy;
global.$      = global.jQuery;
require( './js/jq/jquery.event.gevent.js' );

// 本書のモジュールとグローバル
global.spa = null;
require( './js/spa.js'        );
require( './js/spa.util.js'   );
require( './js/spa.fake.js'   );
require( './js/spa.data.js'   );
require( './js/spa.model.js'  );

// サンプルコード
spa.initModule();
spa.model.setDataMode( 'fake' );

var
  $t = $( '<div/>' );

$.gevent.subscribe(
  $t, 'spa-login',
  function ( event, user ) {
    console.log( 'Login user is:', user );
  }
);

spa.model.people.login( 'Fred' );
