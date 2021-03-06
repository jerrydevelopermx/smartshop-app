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
  const [hovers, setHovers] = useState([]);

  useEffect(() => {
    setHovers(props.items.map(() => false));
  }, [props.items]);

  function changeState(id) {
    setProduct(productStore.getProductById(id));
    setDetails({ open: true });
  }

  function closeModal() {
    setDetails({ open: false });
  }

  function toggleHover(id, flag) {
    setHovers(hovers.map((hover, index) => (index === id ? flag : hover)));
  }

  return (
    <Grid container spacing={4}>
      <ProductDetails
        product={product}
        open={details.open}
        onClose={closeModal}
        classes={props.classes}
      />
      {props.items.map((item, index) =>
        item.id > 0 ? (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className={props.classes.card}>
              {item.type === "store" ? (
                <Link to={"/store/" + item.id}>
                  <div
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      className={props.classes.cardMedia}
                      image={`${process.env.PUBLIC_URL}/imgs/${item.coverImage}`}
                      title={item.name}
                    />
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(52, 52, 52, 0.4)",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 5,
                        color: "#fff",
                      }}
                    >
                      New layer
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  onMouseEnter={() => toggleHover(index, true)}
                  onMouseLeave={() => toggleHover(index, false)}
                  onClick={() => toggleHover(index, true)}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    zIndex: 0,
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardMedia
                    style={{ zIndex: 1 }}
                    className={props.classes.cardMedia}
                    image={`${process.env.PUBLIC_URL}/imgs/${item.coverImage}`}
                    title={item.name}
                  />
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(52, 52, 52, 0.4)",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 5,
                      color: "#fff",
                      display: hovers[index] ? "block" : "none",
                    }}
                  >
                    <div style={{ textAlign: "center", border: "1px solid" }}>
                      <h3>{item.name}</h3>
                      <div>{item.description}</div>
                      <div style={{ marginTop: "20px" }}>
                        <Button variant="contained" color="primary">
                          Add to cart
                        </Button>
                        <Button variant="contained" color="secondary">
                          Fast Checkout
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => changeState(item.id)}
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </Grid>
        ) : null
      )}
    </Grid>
  );
}

export default ItemsGrid;
