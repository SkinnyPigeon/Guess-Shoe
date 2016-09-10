var React = require( 'react' );
var WhoPick = require( './WhoPick' );
var WhoViewer = require( './WhoViewer' );
var WhoClues = require( './WhoClues' );
var Logic = require( '../models/Logic' );

var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0], opponentShoe: this.props.game.opponentShoe, playerShoe: null }
  },

  pickPlayerCard: function( event ) {
    var index = event.target.id;
    this.props.game.playerPickCard( index );
    var hide = document.getElementById( 'who-pick' );
    var show = document.getElementById( 'who-view' );
    hide.className = 'hide-pick';
    console.log( hide );
    console.log( this.props.game.playerShoe );
  },

  eliminateCard: function( event ) {
    var index = event.target.id;
    this.props.game.handleElimination( index );
    event.target.className = "eliminated";
  },

  onColourChange: function( event ) {
    this.props.game.endTurn();
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

  handleTurnDisplay: function() {
    var colourQuestion = document.getElementById( 'colour-question' );
    var styleQuestion = document.getElementById( 'style-question' );
    var colourQuestion = document.getElementById( 'colour-question' );
    // var computerQuesitons = document.getElementsByClassName( 'computer-questions' );
    if( this.props.game.currentPlayer === 0 ) {
      colourQuestion.style.opacity = '1';
      colourQuestion.style.pointerEvents = 'auto';

      styleQuestion.style.opacity = '1';
      styleQuestion.style.pointerEvents = 'auto';
      // computerQuesitons.style.display = 'none';
    }

    if( this.props.game.currentPlayer === 1 ) {
      colourQuestion.style.pointerEvents = 'none';
      colourQuestion.style.opacity = '0';

      styleQuestion.style.pointerEvents = 'none';
      styleQuestion.style.opacity = '0';

      // computerQuesitons.style.display = 'block';
    }
  },

  onStyleChange: function( event ) {
    this.props.game.endTurn();
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
    this.props.game.endTurn();
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
    this.handleTurnDisplay();
  },

  render: function() {
    return(
      <div>
        <WhoViewer shoes={ this.state.shoes } onClick={ this.eliminateCard } />
        <WhoClues onColourChange={ this.onColourChange } onStyleChange={ this.onStyleChange } onDecorationChange={ this.onDecorationChange } />
      </div>
    )
  }

})

module.exports = WhoBox;