var shoes = require( './playerShoes' );

var Logic = function( shoe ) {
  this.shoe = shoe;
}

Logic.prototype = {

  handleColourGuess: function( colour ) {
    if( this.shoe.beige && colour === "BEIGE" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.black && colour === "BLACK" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.red && colour === "RED" ) {
      this.shoe.isEliminated = true;

      return true;
    }
    if( this.shoe.white && colour === "WHITE" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.brown && colour === "BROWN" ) {
      this.shoe.isEliminated = true;
      return true;
    }
  },

  handleStyleGuess: function( style ) {
    if( this.shoe.flat && style === "FLAT" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.bigHeel && style === "BIG HEEL") {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.smallHeel && style === "SMALL HEEL" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.wedge && style === "WEDGE" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.boot && style === "BOOT" ) {
      this.shoe.isEliminated = true;
      return true;
    }
  },

  handleDecorationGuess: function( decoration ) {
    if( this.shoe.buckle && decoration === "BUCKLE" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.laces && decoration === "LACES" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.studded && decoration === "STUDDED" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.openToe && decoration === "OPEN TOES" ) {
      this.shoe.isEliminated = true;
      return true;
    }
    if( this.shoe.openHeel && decoration === "OPEN HEELS" ) {
      this.shoe.isEliminated = true;
      return true;
    }
  }

}

module.exports = Logic;