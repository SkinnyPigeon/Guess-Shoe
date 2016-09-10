var React = require( 'react' );

var WhoQuestioner = function( props ) {

  return(
    <div id="questions">
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
        <option value="RED">Are They Flat?</option>
        <option value="BLACK">Do They Have A Big Heel?</option>
        <option value="BEIGE">Do They Have A Small Heel?</option>
        <option value="WHITE">Are They Wedges?</option>
        <option value="BROWN">Are They Boots?</option>
      </select>

      <select id='decoration-question' onChange={ props.onStyleChange } >
        <option value="DEFAULT">Select A Decoration</option>
        <option value="RED">Do They Have A Buckle?</option>
        <option value="BLACK">Do They Have Laces?</option>
        <option value="BEIGE">Are They Studded?</option>
        <option value="WHITE">Do They Have Open Toes?</option>
        <option value="BROWN">Do They Have Open Heels?</option>
      </select>

    </div>
  )

}

module.exports = WhoQuestioner;