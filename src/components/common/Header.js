import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ModalContent from "./ModalContent";
import contentStore from "../../stores/contentStore";
import { NavHashLink as NavLink } from "react-router-hash-link";

const StyledMenu = withStyles({
  paper: {
    //border: "1px solid #d3d4d5",
    backgroundColor: "#590F10",
    color: "white",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    /*"&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },*/
    "&:hover": {
      backgroundColor: "#350909",
    },
  },
}))(MenuItem);

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [content, setContent] = useState({});
  const [modalContent, setModalContent] = useState({
    open: false,
    sectionId: "",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubMenuClick = (action) => {
    setAnchorEl(null);
    setModalContent({ open: true, sectionId: action });
    setContent(contentStore.getContentBySectionId(action));
  };

  function handleSubMenuScroll(action) {
    //console.log(props.inputRef.current);
    var element = document.getElementById(action + "-scroll");
    //props.inputRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    element.scrollIntoView({ block: "end", behavior: "smooth" });
    //setAnchorEl(null);
  }

  function closeModal() {
    setModalContent({ open: false, sectionId: "" });
  }

  function mobileMenuClickHandler(action) {
    setModalContent({ open: true, sectionId: "mission" });
    setContent(contentStore.getContentBySectionId("mission"));
  }

  function alertHo(action) {
    alert(action);
  }

  return (
    <>
      <ModalContent
        open={modalContent.open}
        classes={props.classes}
        contents={content}
        onClose={closeModal}
      />
      <AppBar className={props.classes.header} position="fixed">
        <Toolbar
          component="nav"
          variant="dense"
          className={props.classes.toolbarSecondary}
        >
          <Hidden only={["sm", "md", "lg"]}>
            <MobileNavBar
              list={props.menu}
              classes={props.classes}
              onClick={mobileMenuClickHandler}
            />
          </Hidden>
          {props.menu &&
            props.menu.map((item) => {
              switch (item.type) {
                case "link":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      <NavLink
                        style={{
                          width: "110px",
                          textAlign: "center",
                        }}
                        activeClassName={props.classes.headerActive}
                        className={props.classes.headerMenu}
                        to={item.url}
                        onClick={() =>
                          item.action ? handleSubMenuClick(item.action) : null
                        }
                        exact
                      >
                        {item.label}
                      </NavLink>
                    </Hidden>
                  );
                case "submenu":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      <NavLink
                        onClick={handleClick}
                        style={{
                          width: "110px",
                          textAlign: "center",
                        }}
                        activeClassName={props.classes.headerActive}
                        className={props.classes.headerMenu}
                        exact
                        to=""
                      >
                        {item.label}
                      </NavLink>

                      <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        {item.items.map((submenu) => (
                          <StyledMenuItem
                            key={submenu.action}
                            onClick={() =>
                              submenu.action === "events" ||
                              submenu.action === "tour"
                                ? handleSubMenuScroll(submenu.action)
                                : handleSubMenuClick(submenu.action)
                            }
                          >
                            <ListItemText primary={submenu.text} />
                          </StyledMenuItem>
                        ))}
                      </StyledMenu>
                    </Hidden>
                  );

                case "logo":
                  return (
                    <div key={item.type}>
                      <img
                        src={`${process.env.PUBLIC_URL}/imgs/${props.logo}`}
                        style={{ height: "60px" }}
                        alt=""
                      />
                    </div>
                  );

                default:
                  break;
              }
            })}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
