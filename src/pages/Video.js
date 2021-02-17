import React from "react";
import { useParams } from "react-router-dom";
import VideoBox from "../components/VideoBox/VideoBox.js";

function Video() {
  let { listid } = useParams();
  return (
    <div>
      <VideoBox listid={listid} />
    </div>
  );
}

export default Video;
