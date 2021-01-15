import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavHashLink as NavLink } from "react-router-hash-link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import GroupIcon from "@material-ui/icons/Group";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import DvrIcon from "@material-ui/icons/Dvr";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import UpdateIcon from "@material-ui/icons/Update";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import StoreIcon from "@material-ui/icons/Store";
import TuneIcon from "@material-ui/icons/Tune";
import access from "../../js/access";

function LeftNavBar(props) {
  let pageAccess = access.getUserAccess("leftNavBar");
  console.log(pageAccess);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: props.styles.topBar.background,
      color: props.styles.headerMenu.color,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    icon: {
      color: props.styles.headerMenu.color,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState({
    site: true,
    department: true,
    users: true,
  });

  const handleClick = (section) => {
    setOpen({ ...open, ...{ [section]: !open[section] } });
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {pageAccess.elements.siteMenuOptions ? (
        <>
          <ListItem button onClick={() => handleClick("site")}>
            <ListItemIcon className={classes.icon}>
              <DesktopMacIcon />
            </ListItemIcon>
            <ListItemText primary="Site" />
            {open.site ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.site} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/cms`
                    : `/admin/cms`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <ArtTrackIcon />
                </ListItemIcon>
                <ListItemText primary="Content Management" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/campaigns`
                    : `/admin/campaigns`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Campaign Management" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary="Monitoring" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={`/admin/incidents`}
              >
                <ListItemIcon className={classes.icon}>
                  <ReportProblemIcon />
                </ListItemIcon>
                <ListItemText primary="Incident Management" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary="Maintenance" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
            </List>
          </Collapse>
        </>
      ) : null}

      <ListItem button onClick={() => handleClick("department")}>
        <ListItemIcon className={classes.icon}>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Department" />
        {open.department ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.department} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pageAccess.elements.siteMenuOptions ? (
            <>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/departments`
                    : `/admin/departments`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Creation and Maintenance" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/cms`
                    : `/admin/cms`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <ArtTrackIcon />
                </ListItemIcon>
                <ListItemText primary="Content Management" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/campaigns`
                    : `/admin/campaigns`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Campaign Manager" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/inventory`
                    : `/admin/inventory`
                }
              >
                <ListItemIcon className={classes.icon}>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Inventory Management" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders Management" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Payments Management" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TuneIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItem>
            </>
          )}
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("users")}>
        <ListItemIcon className={classes.icon}>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open.users ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.users} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to={
              props.pageId === "0"
                ? "/admin/users"
                : `/store/${props.pageId}/admin/users`
            }
          >
            <ListItemIcon className={classes.icon}>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Creation and Maintenance" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to={
              props.pageId !== "0"
                ? `/store/${props.pageId}/admin/userQueries`
                : `/admin/userQueries`
            }
          >
            <ListItemIcon className={classes.icon}>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Queries and Lists" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to={
              props.pageId !== "0"
                ? `/store/${props.pageId}/admin/userTracker`
                : `/admin/userTracker`
            }
          >
            <ListItemIcon className={classes.icon}>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Activity tracker" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.icon}>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default LeftNavBar;
