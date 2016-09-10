var React = require( 'react' );

var WhoDecoration = function( props ) {

console.log( props );
  return(
    <div className="questions">

      <select id='decoration-question' onChange={ props.onDecorationChange } >
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

module.exports = WhoDecoration;