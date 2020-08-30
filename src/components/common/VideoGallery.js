import React, { useRef } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function VideoGallery(props) {
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();
  return (
    <div
      id="tour-scroll"
      ref={props.inputRef}
      className={classes.videoContainer}
    >
      <div className={classes.videoPlayer}>
        <Typography variant="h4">Take a Tour!</Typography>
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
