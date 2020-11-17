import React from "react";
import { useParams } from "react-router";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Slider from "./common/Slider";
import { useQuery } from "@apollo/client";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

function ProductPage(props) {
  let { id, productId } = useParams();
  let styledCloseButton = {
    root: {
      "&:hover": appStyles.buttons.closeModal.root.hover,
      color: appStyles.buttons.closeModal.root.color,
      backgroundColor: appStyles.buttons.closeModal.root.backgroundColor,
    },
  };

  let styledCartButton = {
    root: {
      "&:hover": appStyles.buttons.addToCart.root.hover,
      color: appStyles.buttons.addToCart.root.color,
      backgroundColor: appStyles.buttons.addToCart.root.backgroundColor,
    },
  };

  let styledWishButton = {
    margin: "20px",
    root: {
      "&:hover": appStyles.buttons.wishList.root.hover,
      color: appStyles.buttons.wishList.root.color,
      backgroundColor: appStyles.buttons.wishList.root.backgroundColor,
    },
  };
  const CloseButton = withStyles((theme) => styledCloseButton)(Button);
  const CartButton = withStyles((theme) => styledCartButton)(Button);
  const WishListButton = withStyles((theme) => styledWishButton)(Button);

  const { loading, error, data } = useQuery(queries.GET_PRODUCT_BY_ID, {
    variables: {
      productId: productId,
      storeId: id,
    },
  });
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;
  return (
    <div style={data.page.styles.body}>
      <Header
        logo={data.page.logo}
        blogLink={data.page.blogLink}
        menu={js.header}
        pageId={data.page.id}
        styles={data.page.styles.header}
        modalStyles={data.page.styles.modalStyles}
        appStyles={appStyles.header}
      />
      <main style={{ margin: "120px" }}>
        <h2>Product page</h2>
        <Grid container spacing={3}>
          <Grid item key={productId} xs={12} sm={6} md={6}>
            <Slider
              autoplay={false}
              maxHeight="250px"
              slides={data.product.gallery}
              styles={{ textAlign: "center" }}
            />
            <Typography variant="h6">{data.product.name}</Typography>
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
        <Typography variant="h6" style={{ margin: "15px" }}>
          Attributes
        </Typography>
        <Grid container spacing={2}>
          {data.product.attributes &&
            data.product.attributes.length > 0 &&
            data.product.attributes.map((item, index) => (
              <Grid key={"attr-" + index} item xs={12} sm={3} md={3}>
                <FormControl
                  key={item.name}
                  variant="outlined"
                  style={{
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
                      item.values.map((option, index) => (
                        <MenuItem key={item.name + index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            ))}
        </Grid>
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <WishListButton
            style={{ margin: "10px" }}
            color="primary"
            onClick={props.onClose}
          >
            Add to Wish List
          </WishListButton>
          <CartButton
            style={{ margin: "10px" }}
            color="primary"
            onClick={props.onClose}
          >
            Add to Cart
          </CartButton>
        </div>
      </main>
      <Footer
        appStyles={appStyles.footer}
        styles={data.page.styles.footer}
        content={js.footer}
        socialMedia={data.page.footer}
      />
    </div>
  );
}

export default ProductPage;
