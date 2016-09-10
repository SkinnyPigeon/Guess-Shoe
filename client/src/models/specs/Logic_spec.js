var Logic = require( '../Logic' );
var shoes = require( '../shoes' );
var assert = require( 'chai' ).assert;

describe( 'The Logic: ', function() {

  it( 'Should know the name of the shoe', function() {
    var logic = new Logic( shoes[0] );
    assert.equal( "Puffy Ugly Beige Shoe", logic.shoe.name );
  });

  it( 'Should be able to tell if a shoe is beige', function() {
    var logic = new Logic( shoes[0] );
    var answer = logic.handleColourGuess( 'BEIGE' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is black', function() {
    var logic = new Logic( shoes[6] );
    var answer = logic.handleColourGuess( 'BLACK' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is white', function() {
    var logic = new Logic( shoes[23] );
    var answer = logic.handleColourGuess( 'WHITE' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is brown', function() {
    var logic = new Logic( shoes[11] );
    var answer = logic.handleColourGuess( 'BROWN' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is red', function() {
    var logic = new Logic( shoes[16] );
    var answer = logic.handleColourGuess( 'RED' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is flat', function() {
    var logic = new Logic( shoes[5]);
    var answer = logic.handleStyleGuess( 'FLAT' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is big heeled', function() {
    var logic = new Logic( shoes[0]);
    var answer = logic.handleStyleGuess( 'BIG HEEL' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is small heeled', function() {
    var logic = new Logic( shoes[1]);
    var answer = logic.handleStyleGuess( 'SMALL HEEL' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is a wedge', function() {
    var logic = new Logic( shoes[3]);
    var answer = logic.handleStyleGuess( 'WEDGE' );
    assert.equal( true, answer );
  });

  it( 'Should be able to tell if a shoe is boot', function() {
    var logic = new Logic( shoes[1]);
    var answer = logic.handleStyleGuess( 'BOOT' );
    assert.equal( true, answer );
  });

});

















