var Logic = require( './Logic' );
var lodash = require( 'lodash' );

var Opponent = function( playerShoes ) {

  this.playerShoes = playerShoes;
  this.questions =  [ [[ "RED" ], [ "Are They Red?" ]]
                    , [[ "BLACK" ], [ "Are They Black?" ]]
                    , [[ "BEIGE" ], [ "Are They Beige?" ]]
                    , [[ "WHITE" ], [ "Are They White?" ]]
                    , [[ "BROWN" ], [ "Are They Brown?" ]]
                    , [[ "FLAT" ], [ "Are They Flat?" ]]
                    , [[ "BIG HEEL"], [ "Do They Have A Big Heel?" ]]
                    , [[ "SMALL HEEL" ], [ "Do They Have A Small Heel?" ]]
                    , [[ "WEDGE" ][ "Are They Wedges?" ]]
                    , [[ "BOOT" ][ "Are They Boots?" ]]
                    , [[ "BUCKLE" ], [ "Do They Have A Buckle?" ]]
                    , [[ "LACES" ], [ "Do They Have Laces?" ]]
                    , [[ "STUDDED" ], [ "Are They Studded?" ]]
                    , [[ "OPEN TOES" ], [ "Do They Have Open Toes?" ]]
                    , [[ "OPEN HEELS" ], [ "Do They Have Open Heels?" ]] ];
}

Opponent.prototype = {

  shuffle: function() {
    _.shuffle( this.questions );
  },

  makeGuess: function() {
    this.shuffle();
    var result = _.take( this.questions );
    return result;
  }

}

module.exports = Opponent;