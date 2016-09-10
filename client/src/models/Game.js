var _ = require( 'lodash' );

var Game = function( playerShoes, opponentShoes ) {
  this.playerArray = [ playerShoes, opponentShoes ];
}

Game.prototype = {

  playerPickCard: function( shoeIndex ) {
    this.playerArray[0][ shoeIndex ].isYourCard = true;
  },

  endTurn: function() {
    _.reverse( this.playerArray );
  },
}

module.exports = Game;