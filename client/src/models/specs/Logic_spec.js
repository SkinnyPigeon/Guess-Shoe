var Logic = require( '../Logic' );
var shoes = require( '../shoes' );
var assert = require( 'chai' ).assert;

describe( 'The Logic: ', function() {

  it( 'Should know the name of the shoe', function() {
    var logic = new Logic( shoes[0] );
    assert.equal( "Puffy Ugly Beige Shoe", logic.shoe.name );
  });

  it( 'Should be able to tell a shoe is beige', function() {
    var logic = new Logic( shoes[0] );
    var answer = logic.handleColourGuess( 'BEIGE' );
    assert.equal( true, answer );
  })

});