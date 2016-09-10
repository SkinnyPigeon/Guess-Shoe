var React = require( 'react' );

var WhoClues = function( props ) {

  return(
    <div className="questions">
    
      <select id='colour-question' onChange={ props.onColourChange } >
        <option value="DEFAULT">Select A Colour</option>
        <option value="RED">Are They Red?</option>
        <option value="BLACK">Are They Black?</option>
        <option value="BEIGE">Are They Beige?</option>
        <option value="WHITE">Are They White?</option>
        <option value="BROWN">Are They Brown?</option>
      </select>

      <select id='style-question' onChange={ props.onStyleChange } >
        <option value="DEFAULT">Select A Style</option>
        <option value="FLAT">Are They Flat?</option>
        <option value="BIG HEEL">Do They Have A Big Heel?</option>
        <option value="SMALL HEEL">Do They Have A Small Heel?</option>
        <option value="WEDGE">Are They Wedges?</option>
        <option value="BOOT">Are They Boots?</option>
      </select>

      <select id='decoration-question' onChange={ props.onDecorationChange } >
        <option value="DEFAULT">Select A Decoration</option>
        <option value="BUCKLE">Do They Have A Buckle?</option>
        <option value="LACES">Do They Have Laces?</option>
        <option value="STUDDED">Are They Studded?</option>
        <option value="OPEN TOES">Do They Have Open Toes?</option>
        <option value="OPEN HEELS">Do They Have Open Heels?</option>
      </select>

    </div>
  )

}

module.exports = WhoClues;