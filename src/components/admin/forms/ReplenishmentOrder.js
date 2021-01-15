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
import appFunctions from "../../../js/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function ReplenishmentOrder(props) {
  console.log(props);

  let styledButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.header.background
        ),
      },
      color: props.styles.header.color,
      backgroundColor: props.styles.header.background,
    },
  };
  const SubmitButton = withStyles((theme) => styledButton)(Button);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.styles.header.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.styles.header.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: props.styles.header.background,
        },
      },
    },
  })(TextField);
  const classes = useStyles();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle style={props.styles.header} id="max-width-dialog-title">
        Replenishment Order
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
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="retypePassword"
              label="Product #"
              id="retypePassword"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="retypePassword"
              label="Supplier #"
              id="retypePassword"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="retypePassword"
              label="Date"
              id="retypePassword"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="retypePassword"
              label="quantity ordered"
              id="retypePassword"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
          <SubmitButton>Submit </SubmitButton>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ReplenishmentOrder;
