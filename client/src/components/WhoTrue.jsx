var React = require( 'react' );

var WhoTrue = function( props ) {

  console.log( props );

  return(
    <div id="computer-questions">
      <p>{ props.question }</p>
      <ul id="buttons">
        <button onClick={ props.onClick } >Yes</button>
        <button onClick={ props.onClick } >No</button>
      </ul>
    </div>
  )

}

module.exports = WhoTrue;