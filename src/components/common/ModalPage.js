import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function ModalPage(props) {
  let loginButton = {
    root: {
      "&:hover": props.styles.closeButton.root.hover,
      color: props.styles.closeButton.root.color,
      backgroundColor: props.styles.closeButton.root.backgroundColor,
    },
  };

  const CloseButton = withStyles((theme) => loginButton)(Button);
  const classes = useStyles();

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
        <div>
          <Typography variant="h6">Login - Existing Members</Typography>
        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <TextField
            style={{ width: "80%" }}
            label="Email Address"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <TextField
            style={{ width: "80%" }}
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
        <Grid
          container
          spacing={4}
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                width: "50%",

                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div>Forgot your password?</div>{" "}
              <div> Not a member? Join now!</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                width: "50%",

                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "right",
              }}
            >
              <CloseButton
                variant="contained"
                color="primary"
                onClick={props.onClose}
              >
                Login
              </CloseButton>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ModalPage;
