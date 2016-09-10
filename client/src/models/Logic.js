var shoes = require( './playerShoes' );

var Logic = function( shoe ) {
  this.shoe = shoe;
  this.shoe.isCorrect = false;
}

Logic.prototype = {

  handleColourGuess: function( colour ) {
    if( colour === "DEFAULT" ) {
      return;
    }
    if( this.shoe.beige && colour === "BEIGE" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.black && colour === "BLACK" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.red && colour === "RED" ) {
      this.shoe.isCorrect = true;

      return true;
    }
    if( this.shoe.white && colour === "WHITE" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.brown && colour === "BROWN" ) {
      this.shoe.isCorrect = true;
      return true;
    }
  },

  handleStyleGuess: function( style ) {
    if( this.shoe.flat && style === "FLAT" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.bigHeel && style === "BIG HEEL") {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.smallHeel && style === "SMALL HEEL" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.wedge && style === "WEDGE" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.boot && style === "BOOT" ) {
      this.shoe.isCorrect = true;
      return true;
    }
  },

  handleDecorationGuess: function( decoration ) {
    if( this.shoe.buckle && decoration === "BUCKLE" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.laces && decoration === "LACES" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.studded && decoration === "STUDDED" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.openToe && decoration === "OPEN TOES" ) {
      this.shoe.isCorrect = true;
      return true;
    }
    if( this.shoe.openHeel && decoration === "OPEN HEELS" ) {
      this.shoe.isCorrect = true;
      return true;
    }
  },


}

module.exports = Logic;