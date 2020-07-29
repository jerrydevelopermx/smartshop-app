import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import productStore from "../../stores/productStore";

/*grid : {
  
}
*/
/*const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  detailsModal: {},
}));
*/
function ItemsGrid(props) {
  const [product, setProduct] = useState({});
  const [details, setDetails] = useState({ open: false });

  function changeState(id) {
    setProduct(productStore.getProductById(id));
    setDetails({ open: true });
  }

  function closeModal() {
    setDetails({ open: false });
  }
  return (
    <Grid container spacing={4}>
      <ProductDetails
        product={product}
        open={details.open}
        onClose={closeModal}
        classes={props.classes}
      />
      {props.items.map((item) =>
        item.id > 0 ? (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.cardMedia}
                image={`${process.env.PUBLIC_URL}/imgs/${item.coverImage}`}
                title="Image title"
              />
              <CardContent className={props.classes.cardContent}></CardContent>
              <CardActions>
                <Link to={"/store/" + item.id}> {item.name}</Link>

                <Button
                  size="small"
                  color="primary"
                  onClick={() => changeState(item.id)}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ) : null
      )}
    </Grid>
  );
}

export default ItemsGrid;
