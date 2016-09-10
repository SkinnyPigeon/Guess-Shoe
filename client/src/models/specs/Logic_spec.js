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
  });

  it( 'Should be able to tell if a show is black', function() {
    var logic = new Logic( shoes[6] );
    var answer = logic.handleColourGuess( 'BLACK' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a show is white', function() {
    var logic = new Logic( shoes[23] );
    var answer = logic.handleColourGuess( 'WHITE' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a show is brown', function() {
    var logic = new Logic( shoes[11] );
    var answer = logic.handleColourGuess( 'BROWN' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a show is red', function() {
    var logic = new Logic( shoes[16] );
    var answer = logic.handleColourGuess( 'RED' );
    assert.equal( true, answer );
  });

});