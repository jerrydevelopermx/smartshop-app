import React from "react";
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

function ProductDetails(props) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        className={props.classes.detailsHeader}
        id="max-width-dialog-title"
      >
        Product detail
      </DialogTitle>
      <DialogContent className={props.classes.detailsBody}>
        <Grid container spacing={3}>
          <Grid item key={props.product.id} xs={12} sm={6} md={6}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.cardMedia}
                image={`${process.env.PUBLIC_URL}/imgs/${props.product.coverImage}`}
                title="Image title"
              />
              <CardContent className={props.classes.cardContent}>
                <Typography variant="subtitle" component="h2">
                  {props.product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body2">{props.product.description}</Typography>
            <Typography variant="h6">Specifications</Typography>
            <Typography variant="body2">
              {props.product.specifications}
            </Typography>
            <Typography variant="h6">Warranties</Typography>
            <Typography variant="body2">{props.product.warranties}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            {props.product.attributes &&
              props.product.attributes.length > 0 &&
              props.product.attributes.map((item) => (
                <FormControl
                  key={item.name}
                  variant="outlined"
                  style={{
                    margin: "8px",
                    minWidth: 200,
                  }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    {item.name}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label={item.name}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {item &&
                      item.values &&
                      item.values.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Add to Wish List
        </Button>
        <Button color="primary" onClick={props.onClose}>
          Add to Cart
        </Button>
        <Button color="primary" onClick={props.onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDetails;
