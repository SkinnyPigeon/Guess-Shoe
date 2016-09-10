var React = require( 'react' );
var WhoPick = require( './WhoPick' );
var WhoViewer = require( './WhoViewer' );
var WhoClues = require( './WhoClues' );
var Logic = require( '../models/Logic' );

var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0], opponentShoe: this.props.game.opponentShoe }
  },

  pickPlayerCard: function( event ) {
    var index = event.target.id;
    this.props.game.playerPickCard( index );
  },

  eliminateCard: function( event ) {
    var index = event.target.id;
    this.props.game.handleElimination( index );
    event.target.className = "eliminated";
  },

  onColourChange: function( event ) {
    var array = this.props.game.playerArray[1];
    for( var i = 0; i < array.length; i++ ) {
      var playerLogic = new Logic( array[i] );
      var opponentLogic = new Logic( this.state.opponentShoe );
      var value = event.target.value;
      playerLogic.handleColourGuess( value );
      opponentLogic.handleColourGuess( value );
      this.hideWrongShoes( array[i], i, value );
    }
  },

  onStyleChange: function( event ) {
    var array = this.props.game.playerArray[1];
    for( var i = 0; i < array.length; i++ ) {
      var playerLogic = new Logic( array[i] );
      var opponentLogic = new Logic( this.state.opponentShoe );
      var value = event.target.value;
      playerLogic.handleStyleGuess( value );
      opponentLogic.handleStyleGuess( value );
      this.hideWrongShoes( array[i], i, value );
    }
  },

  onDecorationChange: function( event ) {
    console.log( event.target.value );
    var array = this.props.game.playerArray[1];
    for( var i = 0; i < array.length; i++ ) {
      var playerLogic = new Logic( array[i] );
      var opponentLogic = new Logic( this.state.opponentShoe );
      var value = event.target.value;
      playerLogic.handleDecorationGuess( value );
      opponentLogic.handleDecorationGuess( value );
      this.hideWrongShoes( array[i], i, value );
    }
  },

  hideWrongShoes: function( shoe, index ) {
    var display = document.getElementById( index )
    if( shoe.isCorrect === true && this.state.opponentShoe.isCorrect != true ) {
      display.className = "eliminated";
    }
    if( shoe.isCorrect != true && this.state.opponentShoe.isCorrect === true ) {
      display.className = "eliminated"
    }
  },

  render: function() {
    return(
      <div>
        <WhoPick onClick={ this.pickPlayerCard } />
        <WhoViewer shoes={ this.state.shoes } onDblClick={ this.pickPlayerCard } onClick={ this.eliminateCard } />
        <WhoClues onColourChange={ this.onColourChange } onStyleChange={ this.onStyleChange } onDecorationChange={ this.onDecorationChange } />
      </div>
    )
  }

})

module.exports = WhoBox;