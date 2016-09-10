var React = require( 'react' );

var WhoViewer = function( props ) {

  if(!props.shoes){return(<h1>I am the Images</h1>)}

    var imageNodes = props.shoes.map( function( shoe, index ) {
      return(
          <img src={ shoe.image } index={ index } key={ index } value={ index } id={ index } onClick={ props.onClick } className="active" />
        )
    })

  return(
    <ul id="who-view">
      { imageNodes }
    </ul>
  )

} 

module.exports = WhoViewer;