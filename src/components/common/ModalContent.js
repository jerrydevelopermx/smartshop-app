import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function ModalContent(props) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        style={props.styles.contentModalsHeader}
        id="max-width-dialog-title"
      >
        {props.content.title}
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
        <Button color="primary" onClick={props.onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalContent;
