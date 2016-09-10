var React = require( 'react' );
var WhoViewer = require( './WhoViewer' );

var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0] }
  },

  pickPlayerCard: function( event ) {
    console.log( event.target.id );
    var index = event.target.id;
    console.log( index );
    this.props.game.playerPickCard( index );
  },

  render: function() {
    return(
      <div>
        <WhoViewer shoes={ this.state.shoes } onDblClick={ this.pickPlayerCard } />
      </div>
    )
  }

})

module.exports = WhoBox;