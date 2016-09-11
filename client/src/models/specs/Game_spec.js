var Game = require( '../Game' );
var Logic = require( '../Logic' );
var playerShoes = require( '../playerShoes' );
var opponentShoes = require( '../opponentShoes' );
var testShoes = require( '../testShoes' );

var assert = require( 'chai' ).assert;

describe( 'The Game: ', function() {

  beforeEach( function() {
    game = new Game( playerShoes, opponentShoes );
  })

  it( 'Should be able to see the cards', function() {
    assert.equal( 4, game.playerArray.length );
  });

  it( 'Should let the player select a card', function() {
    game.playerPickCard( 0 );
    assert.equal( true, game.playerArray[0][0].isYourCard );
  });

  it( 'Should not change the opponents card when the player selects a card', function() {
    game.playerPickCard( 0 );
    assert.equal( false, game.playerArray[1][0].isYourCard );
  });

  it( 'Should be able to end the turn', function() {
    game.playerPickCard( 0 );
    game.endTurn();
    assert.equal( 1, game.currentPlayer );
  });


});



// it( 'Should be able to quickly check the computer picks a random character', function() {
//   var newGame = new Game( testShoes, testShoes );
//   newGame.opponentPickCard();
//   assert.equal( true, newGame.playerArray[1][1].isTheirCard );
// });