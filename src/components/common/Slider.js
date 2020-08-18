import React from "react";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";

function Slider(props) {
  return (
    <div id={props.id} style={props.styles}>
      {props.id === "events-scroll" ? (
        <Typography variant="h3">Hot Sales, Promos and Events</Typography>
      ) : null}
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        emulateTouch={true}
        dynamicHeight={false}
        showStatus={false}
        useKeyboardArrows={true}
        transitionTime={550}
      >
        {props.slides &&
          props.slides.length > 0 &&
          props.slides.map((item, index) => (
            <div key={index}>
              <img src={`${process.env.PUBLIC_URL}/imgs/${item.img}`} alt="1" />
              {item.text ? <p className="legend">Legend 3</p> : null}
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default Slider;
