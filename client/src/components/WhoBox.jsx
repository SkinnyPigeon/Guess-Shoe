var React = require( 'react' );
var WhoViewer = require( './WhoViewer' );

var WhoBox = React.createClass({

  getInitialState: function() {
    return{ game: this.props.game, shoes: this.props.game.playerArray[0] }
  },



  render: function() {
    return(
      <div>
        <h1>App Is Working</h1>
        <WhoViewer shoes={ this.state.shoes } />
      </div>
    )
  }

})

module.exports = WhoBox;