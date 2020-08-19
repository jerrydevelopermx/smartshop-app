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
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

const GET_PRODUCT_BY_ID = gql`
  query GetProduct($storeId: String!, $id: ID!) {
    product(storeId: $storeId, id: $id) {
      storeId
      id
      name
      type
      categoryId
      color
      size
      style
      material
      name
      coverImage
      description
      price
      specifications
      warranties
      attributes {
        name
        values
      }
    }
  }
`;

function ProductDetails(props) {
  let styledCloseButton = {
    root: {
      "&:hover": props.buttons.closeModal.root.hover,
      color: props.buttons.closeModal.root.color,
      backgroundColor: props.buttons.closeModal.root.backgroundColor,
    },
  };

  let styledCartButton = {
    root: {
      "&:hover": props.buttons.addToCart.root.hover,
      color: props.buttons.addToCart.root.color,
      backgroundColor: props.buttons.addToCart.root.backgroundColor,
    },
  };

  let styledWishButton = {
    root: {
      "&:hover": props.buttons.wishList.root.hover,
      color: props.buttons.wishList.root.color,
      backgroundColor: props.buttons.wishList.root.backgroundColor,
    },
  };
  const CloseButton = withStyles((theme) => styledCloseButton)(Button);
  const CartButton = withStyles((theme) => styledCartButton)(Button);
  const WishListButton = withStyles((theme) => styledWishButton)(Button);

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      storeId: props.params.pageId,
      id: props.params.productId,
    },
  });
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return data.product ? (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        style={props.styles.detailsHeader}
        id="max-width-dialog-title"
      >
        Product detail
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
      <DialogContent style={props.styles.detailsBody}>
        <Grid container spacing={3}>
          <Grid item key={props.params.productId} xs={12} sm={6} md={6}>
            <Card classes={props.styles.card}>
              <CardMedia
                style={props.styles.cardMedia}
                image={`${process.env.PUBLIC_URL}/imgs/${data.product.coverImage}`}
                title="Image title"
              />
              <CardContent className={props.styles.cardContent}>
                <Typography variant="subtitle" component="h2">
                  {data.product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body2">{data.product.description}</Typography>
            <Typography variant="h6">Specifications</Typography>
            <Typography variant="body2">
              {data.product.specifications}
            </Typography>
            <Typography variant="h6">Warranties</Typography>
            <Typography variant="body2">{data.product.warranties}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ border: "1px solid" }}>
          <Grid item xs={12} sm={4} md={4}>
            {data.product.attributes &&
              data.product.attributes.length > 0 &&
              data.product.attributes.map((item) => (
                <FormControl
                  key={item.name}
                  variant="outlined"
                  style={{
                    margin: "4px",
                    width: "100%",
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
        <WishListButton color="primary" onClick={props.onClose}>
          Add to Wish List
        </WishListButton>
        <CartButton color="primary" onClick={props.onClose}>
          Add to Cart
        </CartButton>
        <CloseButton color="primary" onClick={props.onClose}>
          Close
        </CloseButton>
      </DialogActions>
    </Dialog>
  ) : null;
}

export default ProductDetails;
