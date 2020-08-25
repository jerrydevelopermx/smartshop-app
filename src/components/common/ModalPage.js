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

function ModalPage(props) {
  let styledCLoseButton = {
    root: {
      //"&:hover": props.styles.closeButton.root.hover,
      //color: props.styles.closeButton.root.color,
      //backgroundColor: props.styles.closeButton.root.backgroundColor,
    },
  };

  const CloseButton = withStyles((theme) => styledCLoseButton)(Button);

  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      open={false}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        style={props.styles.contentModalsHeader}
        id="max-width-dialog-title"
      >
        Login
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
        content
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

export default ModalPage;
