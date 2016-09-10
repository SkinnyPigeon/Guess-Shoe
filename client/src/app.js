var React = require('react');
var ReactDOM = require('react-dom');
var playerShoes = require( './models/playerShoes' );
var opponentShoes = require( './models/opponentShoes' );
var backupShoes = require( './models/backupShoes' );
var Game = require( './models/Game' );
var WhoBox = require( './components/WhoBox' );
var Opponent = require( './models/Opponent' );

window.onload = function(){

  var computer = new Opponent( playerShoes );

  playerShoes[0].isYourCard = true;
  var game = new Game( playerShoes, opponentShoes, backupShoes );
  game.opponentPickCard();

  game.playerShoe = game.playerArray[0][0];
  ReactDOM.render(
    <WhoBox game={ game } computer={ computer }/>,
    document.getElementById('app')
  );
}
