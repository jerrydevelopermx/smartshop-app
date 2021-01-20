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
import appFunctions from "../../js/functions";
import ContactForm from "./ContactForm";

function ModalContent(props) {
  console.log(props);
  const useStyles = makeStyles((theme) => ({
    modalPaper: {
      minHeight: "80vh",
      maxHeight: "80vh",
    },
    modal: {
      [theme.breakpoints.only("xs")]: {
        // 0-599
        top: "70px !important",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        //top: "70px !important",
      },
      [theme.breakpoints.only("md")]: {
        //960 - 1279
        top: "70px !important",
      },

      [theme.breakpoints.only("lg")]: {
        //1280 - 1919
        top: "80px !important",
        "&:after": {
          position: "absolute",
          content: `''`,
          left: getLeftPosition(props.status.sectionId),
          top: "12px",
          width: "0",
          height: "0",
          //borderTop: "10px solid black",
          borderBottom: "15px solid " + props.styles.header.background,
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
        },
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        top: "80px !important",
        "&:after": {
          position: "absolute",
          content: `''`,
          left: getLeftPosition(props.status.sectionId),
          top: "53px",
          width: "0",
          height: "0",
          //borderTop: "10px solid black",
          borderBottom: "15px solid " + props.styles.header.background,
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
        },
      },
    },
  }));
  const classes = useStyles();

  let styledCLoseButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.closeButton.root.backgroundColor
        ),
      },
      color: props.styles.closeButton.root.color,
      backgroundColor: props.styles.closeButton.root.backgroundColor,
    },
  };

  const CloseButton = withStyles((theme) => styledCLoseButton)(Button);

  function getLeftPosition(action) {
    let ourServices = ["mission", "who", "board", "features", "membership"];

    if (action === "contact") {
      return "33.5%";
    }
    if (action === "blog") {
      return "78%";
    }
    if (ourServices.indexOf(action) !== -1) {
      return "19%";
    }
  }
  return (
    <Dialog
      classes={{ paper: classes.modalPaper }}
      className={classes.modal}
      fullWidth={true}
      maxWidth="xl"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle style={props.styles.header} id="max-width-dialog-title">
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
      <DialogContent style={props.styles.body}>
        {props.content.content &&
          props.content.content.length > 0 &&
          props.content.content.map((paragraph, index) => (
            <Typography variant="body2" key={"pr" + index} paragraph={true}>
              {paragraph.text}
            </Typography>
          ))}
        {/* styles={data.page.styles.header} pageId={data.page.id} */}
        {props.status.sectionId === "contact" ? (
          <ContactForm
            styles={props.styles.header}
            pageId={props.status.storeId}
          />
        ) : null}
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
