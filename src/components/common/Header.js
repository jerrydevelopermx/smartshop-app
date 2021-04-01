import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useLazyQuery } from "@apollo/client";
import { NavHashLink as NavLink } from "react-router-hash-link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemText from "@material-ui/core/ListItemText";
import { Hidden } from "@material-ui/core/";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ButtonBase from "@material-ui/core/ButtonBase";
import ModalContent from "./ModalContent";
import BackHome from "./BackHome";
import MobileNavBar from "./MobileNavBar";
import queries from "../../graphql/queries.js";
import appFunctions from "../../js/functions";
import "../../styles/app";

function Header(props) {
  console.log(props);
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedMenuEl, setLoggedMenuEl] = useState(null);

  const [modalStatus, setModalStatus] = useState({
    open: false,
    sectionId: "",
    storeId: props.pageId,
  });
  //const [modalPageStatus, setModalPageStatus] = useState({ open: false });
  const anchorRef = useRef(null);
  const [getContent, { data }] = useLazyQuery(
    queries.GET_HTML_CONTENT_BY_ID_SECTION
  );

  const useStyles = makeStyles((theme) => ({
    header: {
      [theme.breakpoints.only("xs")]: {
        // 0-599
        height: "70px",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        height: "70px",
      },
      [theme.breakpoints.up("md")]: {
        //960 - 1279
        height: "80px",
      },

      [theme.breakpoints.up("lg")]: {
        //1280 - 1919
        height: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        height: "130px",
      },
    },
    headerMenu: {
      [theme.breakpoints.up("sm")]: {
        // 600-959
        fontSize: "13px",
        width: "85px",
      },
      [theme.breakpoints.up("md")]: {
        // 600-959
        fontSize: "15px",
        width: "110px",
      },
      [theme.breakpoints.up("lg")]: {
        // 600-959
        fontSize: "18px",
        width: "130px",
      },
      [theme.breakpoints.up("xl")]: {
        // 600-959
        fontSize: "23px",
        width: "150px",
      },
      textAlign: "center",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline !important",
        cursor: "pointer",
      },
    },
    logo: {
      [theme.breakpoints.only("xs")]: {
        height: "68px",
        //margin: "8px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "70px",
        //margin: "8px",
      },
      [theme.breakpoints.up("md")]: {
        height: "80px",
        //margin: "8px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "2px",
        height: "95px",
        //margin: "10px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "2px",
        height: "125px",
        //margin: "8px",
      },
    },
    toolbarSecondary: props.appStyles.toolbarSecondary,
    listItem: {
      "& span": {
        color: props.styles.styledmenu.paper.color,
        fontFamily: props.fontFamily,
      },
    },
  }));

  const classes = useStyles();

  const StyledMenu = withStyles(props.styles.styledmenu)((props) => (
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
  const StyledlLoggedMenu = withStyles(props.styles.styledmenu)((props) => (
    <Menu
      style={{ marginTop: "40px" }}
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

  let styledMenuItem = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.styledmenu.paper.background
        ),
      },
    },
  };

  const StyledMenuItem = withStyles(styledMenuItem)(MenuItem);

  function getMenuLinks(item) {
    if (item.label === "Blog") {
      return props.blogLink !== "" ? props.blogLink : "";
    } else {
      return props.pageId !== 0
        ? "/store/" + props.pageId + item.url
        : item.url;
    }
  }
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubMenuClick = (action) => {
    getContent({
      variables: {
        id: props.pageId,
        sectionId: action,
      },
    });
    setAnchorEl(null);
    setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
  };
  const mobileMenuClickHandler = (action) => {
    console.log(action);
    if (action !== "" && action !== null) {
      getContent({
        variables: {
          id: props.pageId,
          sectionId: action,
        },
      });
      setModalStatus({
        ...modalStatus,
        ...{ open: true, sectionId: action },
      });
    }
  };
  const menuClickHandler = (action, event) => {
    event.preventDefault();

    getContent({
      variables: {
        storeId: props.pageId,
        sectionId: action,
      },
    });
    setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
  };
  function handleSubMenuScroll(action) {
    //setAnchorEl(null);
    var element = document.getElementById(action + "-scroll");
    element.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  function menuClickScroll(action, event) {
    console.log("el otro");
    event.preventDefault();
    var element = document.getElementById(action + "-scroll");
    element.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  function closeModal() {
    setModalStatus({
      ...modalStatus,
      ...{ open: false },
    });
  }
  const handleToggle = (event) => {
    event.preventDefault();
    setLoggedMenuEl(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    setLoggedMenuEl(null);
  };

  const handleLogout = (event) => {
    history.push(
      (props.pageId !== undefined && props.pageId !== "0"
        ? "/store/" + props.pageId
        : "") + "/login"
    );

    localStorage.clear();
    setLoggedMenuEl(null);
  };

  function goToAdmin() {
    history.push(
      (props.pageId !== undefined && props.pageId !== "0"
        ? "/store/" + props.pageId
        : "") + "/admin"
    );
  }

  return (
    <>
      {data && data.siteHtmlContent ? (
        <ModalContent
          open={modalStatus.open}
          styles={props.modalStyles}
          status={modalStatus}
          onClose={closeModal}
          content={data.siteHtmlContent}
          fontFamily={props.fontFamily}
        />
      ) : null}

      <AppBar
        position="fixed"
        style={props.styles.topbar}
        className={classes.header}
      >
        {props.pageId !== "0" ? (
          <BackHome appStyles={props.appStyles} styles={props.styles} />
        ) : null}
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <Hidden only={["sm", "md", "lg", "xl"]}>
            <MobileNavBar
              list={props.menu}
              pageId={props.pageId}
              blogLink={props.blogLink}
              classes={props.classes}
              styles={props.styles.mobilenavbar}
              appStyles={props.appStyles.modalMenu}
              onClick={mobileMenuClickHandler}
              fontFamily={props.fontFamily}
            />
          </Hidden>
          {props.menu &&
            props.menu.map((item) => {
              switch (item.type) {
                case "link":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      {item.label === "Blog" &&
                      props.blogLink.indexOf("http") !== -1 ? (
                        <a
                          target="_new"
                          className={classes.headerMenu}
                          style={props.styles.headermenu}
                          href={props.blogLink}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <>
                          {item.label === "Login" &&
                          user &&
                          user.userName !== undefined ? (
                            <>
                              <ButtonBase
                                ref={anchorRef}
                                aria-haspopup="true"
                                onClick={handleToggle}
                              >
                                <img
                                  src={`${process.env.PUBLIC_URL}/imgs/Bart_Simpson.png`}
                                  style={{
                                    height: "60px",
                                    position: "absolute",
                                    background: "#FFF",
                                    borderRadius: "80px",
                                  }}
                                  alt=""
                                />
                                <span
                                  style={{
                                    top: "40px",
                                    position: "relative",
                                    fontFamily: props.fontFamily,
                                    color: props.styles.styledmenu.paper.color,
                                  }}
                                >
                                  {user.userName !== undefined
                                    ? user.userName
                                    : ""}
                                </span>
                              </ButtonBase>
                              <StyledlLoggedMenu
                                id="customized-menu2"
                                anchorEl={loggedMenuEl}
                                keepMounted
                                open={Boolean(loggedMenuEl)}
                                onClose={handleCloseMenu}
                              >
                                <StyledMenuItem onClick={goToAdmin}>
                                  <ListItemText
                                    className={classes.listItem}
                                    primary={"Admin"}
                                  />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                  <ListItemText
                                    className={classes.listItem}
                                    primary={"My Profile"}
                                  />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                  <ListItemText
                                    className={classes.listItem}
                                    primary={"My Pending Tasks"}
                                  />
                                </StyledMenuItem>
                                <StyledMenuItem>
                                  <ListItemText
                                    className={classes.listItem}
                                    primary={"My Completed Tasks"}
                                  />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={handleLogout}>
                                  <ListItemText
                                    className={classes.listItem}
                                    primary={"Logout"}
                                  />
                                </StyledMenuItem>
                              </StyledlLoggedMenu>
                            </>
                          ) : (
                            <NavLink
                              className={classes.headerMenu}
                              style={props.styles.headermenu}
                              to={getMenuLinks(item)}
                              onClick={(e) =>
                                item.label !== "Blog" && item.action
                                  ? item.action !== "events"
                                    ? item.action === "contactUs"
                                      ? handleSubMenuClick(item.action)
                                      : menuClickHandler(item.action, e)
                                    : menuClickScroll(item.action, e)
                                  : null
                              }
                              exact
                            >
                              {item.label}
                            </NavLink>
                          )}
                        </>
                      )}
                    </Hidden>
                  );
                case "submenu":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      <NavLink
                        id={item.id}
                        onClick={handleClick}
                        className={classes.headerMenu}
                        style={props.styles.headermenu}
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
                              submenu.action === "tour" ||
                              submenu.action === "home"
                                ? handleSubMenuScroll(submenu.action)
                                : handleSubMenuClick(submenu.action)
                            }
                          >
                            <ListItemText
                              className={classes.listItem}
                              primary={submenu.text}
                            />
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
                        className={classes.logo}
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
