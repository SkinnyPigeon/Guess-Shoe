var _ = require( 'lodash' );

var Game = function( playerShoes, opponentShoes ) {
  this.playerArray = [ playerShoes, opponentShoes ];
}

Game.prototype = {

  playerPickCard: function( shoeIndex ) {
    this.playerArray[0][ shoeIndex ].isYourCard = true;
  },

  opponentPickCard: function() {
    var limit = this.playerArray[1].length - 1;
    var index = Math.floor(( Math.random() * limit + 1 ));
    this.playerArray[1][ index ].isTheirCard = true;
  },

  endTurn: function() {
    _.reverse( this.playerArray );
  },
}

module.exports = Game;