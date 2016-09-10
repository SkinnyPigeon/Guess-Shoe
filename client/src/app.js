var React = require('react');
var ReactDOM = require('react-dom');
var playerShoes = require( './models/playerShoes' );
var opponentShoes = require( './models/opponentShoes' );
var Game = require( './models/Game' );
var WhoBox = require( './components/WhoBox' );

window.onload = function(){

  var game = new Game( playerShoes, opponentShoes );

  ReactDOM.render(
    <WhoBox game={ game }/>,
    document.getElementById('app')
  );
}
