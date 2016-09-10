var shoes = require( './shoes' );

var Logic = function( shoe ) {
  this.shoe = shoe;
}

Logic.prototype = {

  handleColourGuess: function( colour ) {
    if( this.shoe.beige === true && colour === "BEIGE" ) {
      return true;
    }
    if( this.shoe.black === true && colour === "BLACK" ) {
      return true;
    }
    if( this.shoe.red === true && colour === "RED" ) {
      return true;
    }
    if( this.shoe.white === true && colour === "WHITE" ) {
      return true;
    }
    if( this.shoe.brown === true && colour === "BROWN" ) {
      return true;
    }
  },

  handleStyleGuess: function( style ) {
    
  }

}

module.exports = Logic;