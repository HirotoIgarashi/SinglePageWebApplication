/*jslint node : true, sloppy  : true, white : true */

// 些細なnodeunit例
// /testAcct/開始
var testAcct = function ( test ) {
  test.expect( 1 );
  test.ok( true, 'this passes' );
  test.done();
};
// /testAcct/終了

module.exports = { testAcct : testAcct };
