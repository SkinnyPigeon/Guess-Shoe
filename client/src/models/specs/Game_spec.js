var Game = require( '../Game' );
var Logic = require( '../Logic' );

var assert = require( 'chai' ).assert;

describe( 'The Game: ', function() {

  beforeEach( function() {
    var playerShoes = require( '../shoes' );
    var opponentShoes = require( '../shoes' );
    var game = new Game( playerShoes, opponentShoes );
  })

  it( 'Should be able to see the cards', function() {
    assert.equal( 2, game.playerArray.length );
  });

});