import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Slider(props) {
  const useStyles = makeStyles((theme) => ({
    main: {
      [theme.breakpoints.only("xs")]: {
        // 600-959
        marginTop: "70px",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        marginTop: "70px",
      },
      [theme.breakpoints.up("md")]: {
        //960 - 1279
        marginTop: "80px",
      },

      [theme.breakpoints.up("lg")]: {
        //1280 - 1919
        marginTop: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        marginTop: "130px",
      },
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  return (
    <div id={props.id} className={classes.main} style={props.styles}>
      {props.id === "events-scroll" ? (
        <Typography variant="h3">Hot Sales, Promos and Events</Typography>
      ) : null}
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={props.autoplay}
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
              <img
                style={{ maxHeight: props.maxHeight }}
                src={`${process.env.PUBLIC_URL}/imgs/${item.img}`}
                alt="1"
              />
              {item.text ? <p className="legend">Legend 3</p> : null}
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default Slider;
