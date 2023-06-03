import React from "react";
import ReactPlayer from "react-player"

export default function Trailer() {
  return (
    <div className="Trailer-sec">
      <h1>Trailer : Patient 47</h1>

      <div class="Trailer-video">
      <ReactPlayer url="https://www.youtube.com/watch?v=R2Ebc_OFeug" 
      controls
      height={700}
      width="97%"
      style={{marginLeft: "35px"}}
      />
      </div>
    </div>
  );
}
