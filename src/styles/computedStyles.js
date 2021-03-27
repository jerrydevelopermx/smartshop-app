import { makeStyles } from "@material-ui/core/styles";
import appFunctions from "../js/functions";

const computed = {
  textField: makeStyles({
    root: {
      "& label.Mui-focused": {
        color: (props) => props.styles.mobileNavBar.paper.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: (props) =>
          props.styles.mobileNavBar.paper.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: (props) => props.styles.mobileNavBar.paper.background,
        },
      },
    },
  }),

  submitButton: makeStyles({
    root: {
      "&:hover": {
        backgroundColor: (props) =>
          appFunctions.getHoverColor(
            props.styles.mobileNavBar.paper.background
          ),
      },
      color: (props) => props.styles.mobileNavBar.paper.color,
      backgroundColor: (props) => props.styles.topBar.background,
    },
  }),
  addButton: makeStyles({
    root: {
      "&:hover": {
        backgroundColor: (props) =>
          props.appButtons.add.root.hover.backgroundColor,
      },
      color: (props) => props.appButtons.add.root.color,
      backgroundColor: (props) => props.appButtons.add.root.backgroundColor,
    },
  }),
  changeButton: makeStyles({
    root: {
      "&:hover": {
        backgroundColor: (props) =>
          props.appButtons.change.root.hover.backgroundColor,
      },
      color: (props) => props.appButtons.change.root.color,
      backgroundColor: (props) => props.appButtons.change.root.backgroundColor,
    },
  }),
  deleteButton: makeStyles({
    root: {
      "&:hover": {
        backgroundColor: (props) =>
          props.appButtons.delete.root.hover.backgroundColor,
      },
      color: (props) => props.appButtons.delete.root.color,
      backgroundColor: (props) => props.appButtons.delete.root.backgroundColor,
    },
  }),
  checkbox: makeStyles({
    root: {
      color: (props) => props.styles.mobileNavBar.paper.background,
      "&$checked": {
        color: (props) => props.styles.mobileNavBar.paper.background,
      },
    },
    checked: {},
  }),
  radio: makeStyles({
    root: {
      color: (props) => props.styles.mobileNavBar.paper.background,
      "&$checked": {
        color: (props) => props.styles.mobileNavBar.paper.background,
      },
    },
    checked: {},
  }),
  activeTab: makeStyles({
    indicator: {
      backgroundColor: (props) => props.styles.mobileNavBar.paper.background,
    },
  }),
};
export default computed;
