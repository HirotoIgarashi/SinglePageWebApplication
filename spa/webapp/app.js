/*
 * app.js - ロギングを備えた簡単なConnectサーバ
*/

/*jslint          node    : true, continue  : true,
  devel   : true, indent  : 2,    maxerr    : 50,
  newcap  : true, nomen   : true, plusplus  : true,
  regexp  : true, sloppy  : true, vars      : false,
  white   : true
*/
/*global */

var
  connectHello, server,
  http      = require( 'http' ),
  connect   = require( 'connect' ),
  logger    = require( 'morgan' ),
  app       = connect(),
  bodyText  = 'Hello Connect';

connectHello = function ( request, response, next ) {
  response.setHeader( 'content-type', bodyText.length );
  response.end( bodyText );
};

app
  .use( logger() )
  .use( connectHello );
server = http.createServer( app );

server.listen( 3000 );
console.log( 'listening on port %d', server.address().port );
