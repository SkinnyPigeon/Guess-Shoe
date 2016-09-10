var React = require( 'react' );

var WhoTrue = function( props ) {

  console.log( props );

  return(
    <div>
      <h1>{ props.question }</h1>
      <ul>
        <button value="Yes" text="Yes" />
        <button value="No" />
      </ul>
    </div>
  )

}

module.exports = WhoTrue;