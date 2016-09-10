var React = require( 'react' );
var WhoViewer = require( './WhoViewer' );
var WhoQuestioner = require( './WhoQuestioner' );
var Logic = require( '../models/Logic' );

var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0] }
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
    for( var i = 0; i < this.props.game.playerArray[1].length; i++ ) {
      var logic = new Logic( this.props.game.playerArray[1][i] );
      logic.handleColourGuess( event.target.value );
      if( this.props.game.playerArray[1][i].isEliminated === true ) {
        this.props.game.playerArray[0][i].className = "eliminated";
      console.log( this.props.game.playerArray[0][i].className )

      }
    }
  },

  render: function() {
    return(
      <div>
        <WhoViewer shoes={ this.state.shoes } onDblClick={ this.pickPlayerCard } onClick={ this.eliminateCard } />
        <WhoQuestioner onColourChange={ this.onColourChange } />
      </div>
    )
  }

})

module.exports = WhoBox;