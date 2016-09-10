var shoes = require( './shoes' );

var Logic = function( shoe ) {
  this.shoe = shoe;
}

Logic.prototype = {

  handleColourGuess: function( colour ) {
    if( this.shoe.beige && colour === "BEIGE" ) {
      return true;
    }
    if( this.shoe.black && colour === "BLACK" ) {
      return true;
    }
    if( this.shoe.red && colour === "RED" ) {
      return true;
    }
    if( this.shoe.white && colour === "WHITE" ) {
      return true;
    }
    if( this.shoe.brown && colour === "BROWN" ) {
      return true;
    }
  },

  handleStyleGuess: function( style ) {
    if( this.shoe.flat && style === "FLAT" ) {
      return true;
    }
    if( this.shoe.bigHeel && style === "BIG HEEL") {
      return true;
    }
    if( this.shoe.smallHeel && style === "SMALL HEEL" ) {
      return true;
    }
    if( this.shoe.wedge && style === "WEDGE" ) {
      return true;
    }
    if( this.shoe.boot && style === "BOOT" ) {
      return true;
    }
  },

}

module.exports = Logic;