import React from "react";
import MobileNavBar from "./MobileNavBar";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

function Header(props) {
  console.log(props);
  return (
    <AppBar className={props.classes.header} position="fixed">
      <Toolbar
        component="nav"
        variant="dense"
        className={props.classes.toolbarSecondary}
      >
        <Hidden only={["sm", "md", "lg"]}>
          <MobileNavBar list={props.menu} classes={props.classes} />
        </Hidden>
        {props.menu &&
          props.menu.map((item) =>
            item.type === "link" ? (
              <Hidden only={["xs"]}>
                <NavLink
                  activeClassName={props.classes.headerActive}
                  className={props.classes.headerMenu}
                  exact
                  to={item.url}
                >
                  {item.label}
                </NavLink>
              </Hidden>
            ) : (
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/${props.logo}`}
                  height="50"
                  alt="s"
                />
              </div>
            )
          )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
