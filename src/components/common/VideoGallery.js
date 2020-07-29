import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

function VideoGallery(props) {
  return (
    <div className={props.classes.videoContainer}>
      <div className={props.classes.videoPlayer}>
        {props.video ? (
          <Player
            poster={`${process.env.PUBLIC_URL}/imgs/${props.video.poster}}`}
            fluid={true}
            autoPlay={props.video.autoPlay}
            src={props.video.src}
          />
        ) : null}
      </div>
    </div>
  );
}

export default VideoGallery;
