var Logic = require( './Logic' );
var lodash = require( 'lodash' );

var Opponent = function( playerShoes ) {

  console.log( playerShoes );
  this.playerShoes = playerShoes;
  this.questions =  [ [[ "RED" ], [ "Are They Red?" ]]
                    , [[ "BLACK" ], [ "Are They Black?" ]]
                    , [[ "BEIGE" ], [ "Are They Beige?" ]]
                    , [[ "WHITE" ], [ "Are They White?" ]]
                    , [[ "BROWN" ], [ "Are They Brown?" ]]
                    , [[ "FLAT" ], [ "Are They Flat?" ]]
                    , [[ "BIG HEEL"], [ "Do They Have A Big Heel?" ]]
                    , [[ "SMALL HEEL" ], [ "Do They Have A Small Heel?" ]]
                    , [[ "WEDGE" ], [ "Are They Wedges?" ]]
                    , [[ "BOOT" ], [ "Are They Boots?" ]]
                    , [[ "BUCKLE" ], [ "Do They Have A Buckle?" ]]
                    , [[ "LACES" ], [ "Do They Have Laces?" ]]
                    , [[ "STUDDED" ], [ "Are They Studded?" ]]
                    , [[ "OPEN TOES" ], [ "Do They Have Open Toes?" ]]
                    , [[ "OPEN HEELS" ], [ "Do They Have Open Heels?" ]] ];
}

Opponent.prototype = {

  shuffle: function() {
    this.questions = _.shuffle( this.questions );
  },

  makeGuess: function() {
    this.shuffle();
    var result = _.take( this.questions );
    this.questions.splice( 0, 1 );
    return result;
  },

  checkCard: function() {
    if( this.playerShoes.length === 1 ) {
      console.log( this.playerShoes[0].name );
    }
  }

}

module.exports = Opponent;