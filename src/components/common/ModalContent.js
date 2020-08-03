import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import contentStore from "../../stores/contentStore";
import pageStore from "../../stores/pageStore";
import * as contentActions from "../../actions/contentActions";

function ModalContent(props) {
  console.log(props);
  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        className={props.classes.contentModalsHeader}
        id="max-width-dialog-title"
      >
        {props.contents.title}
      </DialogTitle>
      <DialogContent className={props.classes.contentModalsBody}>
        {props.contents.content &&
          props.contents.content.length > 0 &&
          props.contents.content.map((paragraph, index) => (
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
