import React from 'react';

function TuneItem(props) {
  return(
    <div className ="tune">
    <h3>Chart Position: {props.children+1}</h3>
    <div className="tune-info">
      <img src={props.tune["im:image"][1].label} alt="image of artist" />
      <div className="tune-details">
        <p>Title: {props.tune["im:name"].label}</p>
        <p>Artist: {props.tune["im:artist"].label}</p>


        </div>

      </div>
      <audio
        controls
        src={props.tune.link[1].attributes.href}>
         Your browser does not support the
         <code>audio</code> element.
       </audio>
    </div>
  )
}
export default TuneItem;
