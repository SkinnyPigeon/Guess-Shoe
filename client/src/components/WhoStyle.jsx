var React = require( 'react' );

var WhoStyle = function( props ) {

  return(
    <div className="questions">

      <select id='style-question' onChange={ props.onStyleChange } >
        <option value="DEFAULT">Select A Style</option>
        <option value="RED">Are They Flat?</option>
        <option value="BLACK">Do They Have A Big Heel?</option>
        <option value="BEIGE">Do They Have A Small Heel?</option>
        <option value="WHITE">Are They Wedges?</option>
        <option value="BROWN">Are They Boots?</option>
      </select>

    </div>
  )

}

module.exports = WhoStyle;