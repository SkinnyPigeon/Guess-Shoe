var React = require( 'react' );

var WhoQuestioner = function( props ) {

  return(
    <div id="questions">
      <select id='colour-question' onChange={ props.onColourChange }>
          <option value="RED">Are They Red?</option>
          <option value="BLACK">Are They Black?</option>
          <option value="BEIGE">Are They Beige?</option>
          <option value="WHITE">Are They White?</option>
          <option value="BROWN">Are They Brown?</option>
      </select>
    </div>
  )

}

module.exports = WhoQuestioner;