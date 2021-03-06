var React = require( 'react' );
var WhoPick = require( './WhoPick' );
var WhoViewer = require( './WhoViewer' );
var WhoClues = require( './WhoClues' );
var WhoTrue = require( './WhoTrue' );
var WhoWins = require( './WhoWins' );
var Logic = require( '../models/Logic' );
var counter = 0;


var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0], opponentShoe: this.props.game.opponentShoe, playerShoe: this.props.game.playerShoe, computer: this.props.computer, question: null }
  },

  componentDidMount: function() {
    this.opponentHandler();
    this.handleTurnDisplay();
  },

  counter: function() {
    var opponentShoe = document.getElementById( 'opponent-shoe' );
    counter += 1;
    console.log( counter );
    if( counter === 23 ) {
      opponentShoe.style.display = 'block';
    }
  },

  pickPlayerCard: function( event ) {
    var index = event.target.id;
    this.props.game.playerPickCard( index );
    var hide = document.getElementById( 'who-pick' );
    var show = document.getElementById( 'who-view' );
    hide.className = 'hide-pick';
  },

  eliminateCard: function( event ) {
    var index = event.target.id;
    this.props.game.handleElimination( index );
    event.target.className = "eliminated";
  },

  onColourChange: function( event ) {
    this.handleTurnDisplay();
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
      this.props.game.endTurn();

    }

    if( this.props.game.currentPlayer === 1 ) {
      this.hidePlayer();
    }
  },

  showPlayer: function() {
    var colourQuestion = document.getElementById( "colour-question" );
    var styleQuestion = document.getElementById( 'style-question' );
    var decorationQuestion = document.getElementById( 'decoration-question' );

    var computerQuestions = document.getElementById( 'computer-questions' );

    colourQuestion.style.opacity = '1';
    colourQuestion.style.pointerEvents = 'auto';

    styleQuestion.style.opacity = '1';
    styleQuestion.style.pointerEvents = 'auto';

    decorationQuestion.style.opacity = '1';
    decorationQuestion.style.pointerEvents = 'auto';

    computerQuestions.style.opacity = '0';
    computerQuestions.style.pointerEvents = 'none';
    this.checkForWinner();
  },

  hidePlayer: function() {
    var colourQuestion = document.getElementById( "colour-question" );
    var styleQuestion = document.getElementById( 'style-question' );
    var decorationQuestion = document.getElementById( 'decoration-question' );

    var computerQuestions = document.getElementById( 'computer-questions' );

    colourQuestion.style.pointerEvents = 'none';
    colourQuestion.style.opacity = '0';

    styleQuestion.style.pointerEvents = 'none';
    styleQuestion.style.opacity = '0';

    decorationQuestion.style.opacity = '0';
    decorationQuestion.style.pointerEvents = 'none';

    computerQuestions.style.opacity = '1';
    computerQuestions.style.pointerEvents = 'auto';
  },

  onStyleChange: function( event ) {
    this.handleTurnDisplay();

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
    var array = this.props.game.playerArray[2];
    var computer = this.props.computer;
    var question = computer.makeGuess();
    for( var i = 0; i < array.length; i++ ) {
      var opponentLogic = new Logic( array[i] );
      var playerLogic = new Logic( this.state.playerShoe );
      var stringQuestion = question[0][0].toString()

      opponentLogic.handleColourGuess( stringQuestion );
      playerLogic.handleColourGuess( stringQuestion );

      opponentLogic.handleDecorationGuess( stringQuestion );
      playerLogic.handleDecorationGuess( stringQuestion );

      opponentLogic.handleStyleGuess( stringQuestion );
      playerLogic.handleStyleGuess( stringQuestion );

      this.removeWrongShoes( array[i], i );
    }
    this.giveQuestion( question[0][1] )
    this.showPlayer();
  },

  giveQuestion: function( question ) {
    this.setState({ question: question })
  },

  removeWrongShoes: function( shoe, index ) {
    if( shoe.isCorrect === true && this.state.playerShoe.isCorrect != true ) {
      this.state.game.playerArray[2].splice( index, 1 );
    }
    if( shoe.isCorrect != true && this.state.playerShoe.isCorrect === true ) {
      this.state.game.playerArray[2].splice( index, 1 );
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

  onDecorationChange: function( event ) {
    this.handleTurnDisplay();
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

  checkForWinner: function() {
    var playerShoe = document.getElementById( 'player-shoe' );
    var opponentShoe = document.getElementById( 'opponent-shoe' );
    if( this.props.game.playerArray[2].length === 1 ) {
      playerShoe.style.display = 'block';
    }
    if( this.props.game.playerArray[3].length === 1 ) {
      opponentShoe.style.display = 'block';
    }
  },



  render: function() {
    return(
      <div>
        <WhoViewer shoes={ this.state.shoes } onClick={ this.eliminateCard } />
        <WhoTrue question={ this.state.question } onClick={ this.opponentHandler }/>
        <WhoClues onColourChange={ this.onColourChange } onStyleChange={ this.onStyleChange } onDecorationChange={ this.onDecorationChange } />
        <WhoWins playerShoe={ this.props.game.playerShoe } opponentShoe={ this.props.game.opponentShoe }/>
      </div>
    )
  }

})

module.exports = WhoBox;