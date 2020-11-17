import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ModalContent from "./ModalContent";
import ModalPage from "./ModalPage";
import BackHome from "./BackHome";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLazyQuery } from "@apollo/client";
import queries from "../../graphql/queries.js";

function Header(props) {
  console.log(props);
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
  }));
  const classes = useStyles();
  const [getContent, { loading, data }] = useLazyQuery(
    queries.GET_CONTENT_BY_SECTION
  );

  const StyledMenu = withStyles(props.styles.styledMenu)((props) => (
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

  let styledMenuItem = {
    root: {
      "&:hover": {
        backgroundColor: getHoverColor(
          props.styles.styledMenu.paper.backgroundColor
        ),
      },
    },
  };
  function getHoverColor(mainColor) {
    var arr = mainColor
      .substring(mainColor.indexOf("(") + 1, mainColor.indexOf(")"))
      .split(",")
      .map(function (num) {
        console.log(num);
        return Number(num) - 30 > 0 ? Number(num) - 30 : 0;
      });

    return "rgb(" + arr.toString() + ")";
  }
  const StyledMenuItem = withStyles((theme) => styledMenuItem)(MenuItem);

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalStatus, setModalStatus] = useState({
    open: false,
    sectionId: "",
    storeId: props.pageId,
  });

  const [modalPageStatus, setModalPageStatus] = useState({ open: false });

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
        storeId: props.pageId,
        sectionId: action,
      },
    });
    setAnchorEl(null);
    setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
  };

  const mobileMenuClickHandler = (action) => {
    if (action !== null) {
      if (action !== "login") {
        getContent({
          variables: {
            storeId: props.pageId,
            sectionId: action,
          },
        });
        setModalStatus({
          ...modalStatus,
          ...{ open: true, sectionId: action },
        });
      } else {
        setModalPageStatus({ open: true });
      }
    }
  };

  const menuClickHandler = (action, event) => {
    event.preventDefault();
    if (action !== "login") {
      getContent({
        variables: {
          storeId: props.pageId,
          sectionId: action,
        },
      });
      setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
    } else {
      setModalPageStatus({ open: true });
    }
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

  function closeModalPage() {
    setModalPageStatus({ open: false });
  }

  return (
    <>
      {data && data.content ? (
        <ModalContent
          open={modalStatus.open}
          styles={props.modalStyles}
          status={modalStatus}
          onClose={closeModal}
          content={data.content}
        />
      ) : null}

      <ModalPage
        open={modalPageStatus.open}
        styles={props.modalStyles}
        status={modalStatus}
        onClose={closeModalPage}
      ></ModalPage>
      <AppBar
        position="fixed"
        style={props.styles.topBar}
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
              classes={props.classes}
              styles={props.styles.mobileNavBar}
              appStyles={props.appStyles.modalMenu}
              onClick={mobileMenuClickHandler}
            />
          </Hidden>
          {props.menu &&
            props.menu.map((item) => {
              console.log(props.blogLink.indexOf("http"));
              switch (item.type) {
                case "link":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      {item.label === "Blog" &&
                      props.blogLink.indexOf("http") !== -1 ? (
                        <a
                          target="_new"
                          className={classes.headerMenu}
                          style={props.styles.headerMenu}
                          href={props.blogLink}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <NavLink
                          className={classes.headerMenu}
                          style={props.styles.headerMenu}
                          to={
                            item.label !== "Blog"
                              ? item.url
                              : props.blogLink !== ""
                              ? props.blogLink
                              : false
                          }
                          onClick={(e) =>
                            item.label !== "Blog" && item.action
                              ? item.action !== "home" ||
                                item.action !== "events"
                                ? menuClickHandler(item.action, e)
                                : menuClickScroll(item.action, e)
                              : null
                          }
                          exact
                        >
                          {item.label}
                        </NavLink>
                      )}
                      {/*props.blogLink.indexOf("http") === -1 ? (
                        <NavLink
                          className={classes.headerMenu}
                          style={props.styles.headerMenu}
                          to={
                            item.label !== "Blog"
                              ? item.url
                              : props.blogLink !== ""
                              ? props.blogLink
                              : false
                          }
                          onClick={(e) =>
                            item.label !== "Blog" && item.action
                              ? item.action !== "home" ||
                                item.action !== "events"
                                ? menuClickHandler(item.action, e)
                                : menuClickScroll(item.action, e)
                              : null
                          }
                          exact
                        >
                          {item.label}
                        </NavLink>
                      ) : (
                        <a
                          target="_new"
                          className={classes.headerMenu}
                          style={props.styles.headerMenu}
                          href={props.blogLink}
                        >
                          {item.label}
                        </a>
                      )*/}
                    </Hidden>
                  );
                case "submenu":
                  return (
                    <Hidden key={item.label} only={["xs"]}>
                      <NavLink
                        id={item.id}
                        onClick={handleClick}
                        className={classes.headerMenu}
                        style={props.styles.headerMenu}
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
