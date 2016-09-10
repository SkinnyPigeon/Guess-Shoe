var shoes = require( './shoes' );

var Logic = function( shoe ) {
  this.shoe = shoe;
}

Logic.prototype = {

  handleColourGuess: function( colour ) {
    if( this.shoe.beige === true && colour === "BEIGE" ) {
      return true;
    }
  },

}

module.exports = Logic;