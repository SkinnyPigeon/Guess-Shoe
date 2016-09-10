var React = require( 'react' );
var WhoPick = require( './WhoPick' );
var WhoViewer = require( './WhoViewer' );
var WhoClues = require( './WhoClues' );
var WhoTrue = require( './WhoTrue' );
var Logic = require( '../models/Logic' );


var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0], opponentShoe: this.props.game.opponentShoe, playerShoe: this.props.game.playerShoe, computer: this.props.computer, question: null }
  },

  componentWillMount: function() {
    this.opponentHandler();
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

    if( this.props.game.currentPlayer === 0 ) {
      this.showPlayer();
    }

    if( this.props.game.currentPlayer === 1 ) {
      this.hidePlayer();
    }
  },

  showPlayer: function() {
    var colourQuestion = document.getElementById( 'colour-question' );
    var styleQuestion = document.getElementById( 'style-question' );
    var colourQuestion = document.getElementById( 'colour-question' );

    // var computerQuesitons = document.getElementsByClassName( 'computer-questions' );

    colourQuestion.style.opacity = '1';
    colourQuestion.style.pointerEvents = 'auto';

    styleQuestion.style.opacity = '1';
    styleQuestion.style.pointerEvents = 'auto';

      // computerQuestions.style.opacity = '0';
      // computerQuestions.style.pointerEvents = 'none';
  },

  hidePlayer: function() {
    var colourQuestion = document.getElementById( 'colour-question' );
    var styleQuestion = document.getElementById( 'style-question' );
    var colourQuestion = document.getElementById( 'colour-question' );

    colourQuestion.style.pointerEvents = 'none';
    colourQuestion.style.opacity = '0';

    styleQuestion.style.pointerEvents = 'none';
    styleQuestion.style.opacity = '0';
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

  opponentHandler: function() {
    var array = this.props.game.playerArray[0];
    var computer = this.props.computer;
    var question = computer.makeGuess();
    for( var i = 0; i < array.length; i++ ) {
      var opponentLogic = new Logic( array[i] );
      var playerLogic = new Logic( this.state.playerShoe );
      opponentLogic.handleDecorationGuess( question[0] );
      playerLogic.handleDecorationGuess( question[0] );
      this.removeWrongShoes( array[i], question[0] );
    }
    this.giveQuestion( question[0][1] )
  },

  giveQuestion: function( question ) {
    this.setState({ question: question })
  },

  removeWrongShoes: function( shoe, index ) {
    if( shoe.isCorrect === true && this.state.playerShoe.isCorrect != true ) {
      console.log( this.stae.playerArray[0][index])
      this.state.playerArray[0].splice( index, 1 );
    }
    if( shoe.isCorrect != true && this.state.playerShoe.isCorrect === true ) {
      this.state.playerArray[0].splice( index, 1 );
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
    this.opponentHandler();
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



  render: function() {
    return(
      <div>
        <WhoViewer shoes={ this.state.shoes } onClick={ this.eliminateCard } />
        <WhoTrue question={ this.state.question } onClick={ this.opponentHandler }/>
        <WhoClues onColourChange={ this.onColourChange } onStyleChange={ this.onStyleChange } onDecorationChange={ this.onDecorationChange } />
      </div>
    )
  }

})

module.exports = WhoBox;