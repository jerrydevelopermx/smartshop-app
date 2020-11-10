import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";

function BackHome(props) {
  const useStyles = makeStyles(theme => ({
    backDiv: props.appStyles.backHome.div,
    backImg: props.appStyles.backHome.img
  }));
  const classes = useStyles();

  return (
    <div className={classes.backDiv}>
      <Link to="/">
        <Tooltip title="Go to Smart Shop" aria-label="Go SmartShop">
          <img
            className={classes.backImg}
            src={`${process.env.PUBLIC_URL}/imgs/bevariante1.png`}
            alt="Go to Smart Shop"
          />
        </Tooltip>
      </Link>
    </div>
  );
}

export default BackHome;
