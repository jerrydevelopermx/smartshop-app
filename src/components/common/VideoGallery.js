import React, { useRef } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import Typography from "@material-ui/core/Typography";

function VideoGallery(props) {
  return (
    <div
      id="tour-scroll"
      ref={props.inputRef}
      style={props.styles.videoContainer}
    >
      <div style={props.styles.videoPlayer}>
        <Typography variant="h3">Take a Tour!</Typography>
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
