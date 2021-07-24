import React from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing Now:</h4>
      {/* {DETAILS} */}
      <PlayerDetails song={props.song} />
      {/* {CONTROLS} */}
      <p>
        <strong>Next up: </strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
}

export default Player;
