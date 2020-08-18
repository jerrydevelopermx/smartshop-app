import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ModalContent from "./ModalContent";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CONTENT_BY_SECTION = gql`
  query GetContent($storeId: ID!, $sectionId: String) {
    content(storeId: $storeId, sectionId: $sectionId) {
      pageId
      sectionId
      title
      content {
        type
        text
      }
    }
  }
`;

function Header(props) {
  const [getContent, { loading, data }] = useLazyQuery(GET_CONTENT_BY_SECTION);

  /*
  let styles = {
    paper: {
      //border: "1px solid #d3d4d5",
      backgroundColor: "#590F10",
      color: "white",
    },
  };
  let styles2 = {
    root: {
      "&:hover": {
        backgroundColor: "#350909",
      },
    },
  };*/
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
      "&:hover": props.styles.styledMenuItem.root.hover,
    },
  };
  const StyledMenuItem = withStyles((theme) => styledMenuItem)(MenuItem);

  const [anchorEl, setAnchorEl] = useState(null);
  const [content, setContent] = useState({});
  const [modalContent, setModalContent] = useState({
    open: false,
    sectionId: "mission",
    content: {},
  });
  const [modalStatus, setModalStatus] = useState({
    open: false,
    sectionId: "",
    storeId: props.pageId,
  });

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
    getContent({
      variables: {
        storeId: props.pageId,
        sectionId: action,
      },
    });

    setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
  };

  function handleSubMenuScroll(action) {
    //console.log(props.inputRef.current);
    var element = document.getElementById(action + "-scroll");
    //props.inputRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    element.scrollIntoView({ block: "end", behavior: "smooth" });
    //setAnchorEl(null);
  }

  function closeModal() {
    setModalStatus({
      ...modalStatus,
      ...{ open: false },
    });
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
      <AppBar style={props.styles.topBar} position="fixed">
        <Toolbar
          component="nav"
          variant="dense"
          style={props.styles.toolbarSecondary}
        >
          <Hidden only={["sm", "md", "lg"]}>
            <MobileNavBar
              list={props.menu}
              classes={props.classes}
              styles={props.mobileBarStyles}
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
                        activeStyle={props.styles.headerActive}
                        style={props.styles.headerMenu}
                        to={item.url}
                        onClick={() =>
                          item.action
                            ? getContent({
                                variables: {
                                  storeId: "0",
                                  sectionId: "mission",
                                },
                              })
                            : null
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
                        id={item.id}
                        onClick={handleClick}
                        activeStyle={props.styles.headerActive}
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
