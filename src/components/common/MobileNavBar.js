import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

function MobileNavBar(props) {
  const useStyles = makeStyles(props.styles);
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleClick = (event) => {
    setSubmenuOpen(!submenuOpen);
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
        variant="temporary"
        onEscapeKeyDown={toggleDrawer}
        onBackdropClick={toggleDrawer}
        open={state}
        onOpen={() => {}}
        classes={{ paper: classes.paper }}
        onClose={toggleDrawer(false)}
      >
        <div role="presentation">
          <List className={classes.list}>
            {props.list &&
              props.list.map((element, index) =>
                element.type === "link" ? (
                  <ListItem button key={element.label}>
                    <ListItemText primary={element.label} />
                  </ListItem>
                ) : element.type === "submenu" ? (
                  <div key={"f" + index}>
                    <ListItem key={"s" + index} button onClick={handleClick}>
                      <ListItemText primary="Our Services" />
                      {submenuOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {element.items.map((submenu, index) => (
                          <ListItem
                            key={index}
                            button
                            onClick={() => {
                              props.onClick(submenu.action);
                              toggleDrawer(false);
                            }}
                            style={{ marginLeft: "10px" }}
                          >
                            <ListItemText primary={submenu.text} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ) : null
              )}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MobileNavBar;
