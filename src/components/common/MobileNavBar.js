import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "black",
    color: "white",
  },
});

function MobileNavBar(props) {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state}
        onOpen
        classes={{ paper: props.classes.drawer }}
        onClose={toggleDrawer(false)}
      >
        <div
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          role="presentation"
        >
          <List className={props.classes.drawerList}>
            {props.list &&
              props.list.map((element, index) =>
                element.type === "link" ? (
                  <ListItem button key={element.label}>
                    <ListItemText primary={element.label} />
                  </ListItem>
                ) : null
              )}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MobileNavBar;
