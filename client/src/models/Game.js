var _ = require( 'lodash' );

var Game = function( playerShoes, opponentShoes ) {
  this.playerArray = [ playerShoes, opponentShoes ];
  this.currentPlayer = 0;
}

Game.prototype = {

  playerPickCard: function( shoeIndex ) {
    this.playerArray[ this.currentPlayer ][ shoeIndex ].isYourCard = true;
  },

  opponentPickCard: function() {
    var limit = this.playerArray[1].length - 1;
    var index = Math.floor(( Math.random() * limit + 1 ));
    this.playerArray[1][ index ].isTheirCard = true;
  },

  endTurn: function() {
    if( this.currentPlayer === 0) {
      this.currentPlayer = 1;
    }
    if( this.currentPlayer === 1 ) {
      this.currentPlayer = 0;
    }
  },

  handleElimination: function( shoeIndex ) {
    this.playerArray[ this.currentPlayer ][ shoeIndex ].isEliminated = true;
  }
}

module.exports = Game;