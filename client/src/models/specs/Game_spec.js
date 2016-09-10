var Game = require( '../Game' );
var Logic = require( '../Logic' );
var playerShoes = require( '../playerShoes' );
var opponentShoes = require( '../opponentShoes' );

var assert = require( 'chai' ).assert;

describe( 'The Game: ', function() {

  beforeEach( function() {
    game = new Game( playerShoes, opponentShoes );
  })

  it( 'Should be able to see the cards', function() {
    assert.equal( 2, game.playerArray.length );
  });

  it( 'Should let the player select a card', function() {
    game.playerPickCard( 0 );
    assert.equal( true, game.playerArray[0][0].isYourCard );
  });

  it( 'Should not change the opponents card when the player selects a card', function() {
    game.playerPickCard( 0 );
    assert.equal( false, game.playerArray[1][0].isYourCard );
  });

});