var React = require( 'react' );

var WhoWins = function( props ) {

  return(
    <div>
      <h1 id="player-shoe">Your shoe is { props.playerShoe.name }</h1>
      <h1 id="opponent-shoe">Congratulations, their shoe was { props.opponentShoe.name }</h1>
    </div>
  )

}

module.exports = WhoWins;