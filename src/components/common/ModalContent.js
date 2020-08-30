import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

function ModalContent(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      [theme.breakpoints.only("xs")]: {
        // 0-599
        top: "70px !important",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        top: "70px !important",
      },
      [theme.breakpoints.up("md")]: {
        //960 - 1279
        top: "70px !important",
      },

      [theme.breakpoints.up("lg")]: {
        //1280 - 1919
        top: "75px !important",
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        top: "130px !important",
      },
    },
    arrow: {
      border: "2px solid red",
      "&:after": {
        height: "4px",
        background: "black",
        position: "absolute",
        content: "",
        bottom: "-10px",
        right: "0",
        width: "4px",
        height: "0",
        border: "4px solid",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderLeft: "10px solid black",
      },
    },
  }));
  const classes = useStyles();

  let styledCLoseButton = {
    root: {
      "&:hover": props.styles.closeButton.root.hover,
      color: props.styles.closeButton.root.color,
      backgroundColor: props.styles.closeButton.root.backgroundColor,
    },
  };

  const CloseButton = withStyles((theme) => styledCLoseButton)(Button);
  console.log(classes);
  return (
    <Dialog
      className={classes.modal}
      fullWidth={true}
      maxWidth="lg"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        className={classes.arrow}
        style={props.styles.contentModalsHeader}
        id="max-width-dialog-title"
      >
        {props.content.title}
        <IconButton
          aria-label="close"
          style={{
            position: "absolute",
            right: "8px",
            top: "8px",
            color: "#fff",
          }}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={props.styles.contentModalsBody}>
        {props.content.content &&
          props.content.content.length > 0 &&
          props.content.content.map((paragraph, index) => (
            <Typography variant="body2" key={"pr" + index} paragraph={true}>
              {paragraph.text}
            </Typography>
          ))}
      </DialogContent>
      <DialogActions>
        <CloseButton
          variant="contained"
          color="primary"
          onClick={props.onClose}
        >
          Close
        </CloseButton>
      </DialogActions>
    </Dialog>
  );
}

export default ModalContent;
