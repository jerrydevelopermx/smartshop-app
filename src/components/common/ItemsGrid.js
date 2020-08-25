import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ItemsGrid(props) {
  const [details, setDetails] = useState({
    open: false,
    productId: "",
    pageId: "",
  });
  const [hovers, setHovers] = useState([]);

  useEffect(() => {
    setHovers(props.items.map(() => false));
  }, [props.items]);

  function changeState(id, pageId) {
    setDetails({ open: true, productId: id, pageId: pageId });
  }

  function closeModal() {
    setDetails({ open: false, productId: "", pageId: "" });
  }

  function toggleHover(id, flag) {
    setHovers(hovers.map((hover, index) => (index === id ? flag : hover)));
  }

  return (
    <Grid container spacing={4}>
      {props.pageId !== "0" && details.productId !== "" ? (
        <ProductDetails
          params={details}
          open={details.open}
          onClose={closeModal}
          styles={props.detailStyles}
          buttons={props.buttonsStyles}
          gridStyles={props.appStyles}
        />
      ) : null}

      {props.items.map((item, index) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card>
            {item.type === "store" ? (
              <Link to={"/store/" + item.id}>
                <div
                  onMouseOver={() => toggleHover(index, true)}
                  onMouseOut={() => toggleHover(index, false)}
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
                    style={props.appStyles.cardMedia}
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
                    <div style={{ textAlign: "center" }}>
                      <h3>{item.name}</h3>
                      <div>
                        <img
                          style={{ maxHeight: "120px" }}
                          src={`${process.env.PUBLIC_URL}/imgs/${item.hoverImage}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                onMouseOver={() => toggleHover(index, true)}
                onMouseOut={() => toggleHover(index, false)}
                onClick={() => toggleHover(index, true)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  zIndex: 0,
                }}
              >
                <CardMedia
                  style={props.appStyles.cardMedia}
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
                  <div style={{ textAlign: "center" }}>
                    <h3>{item.name}</h3>
                    <div>{item.description.substring(0, 50)}...</div>
                    <div style={{ marginTop: "30px" }}>
                      <Link
                        to=""
                        style={{
                          height: "35px",
                          backgroundColor: "#228b22",
                          color: "white",
                          border: "1px solid #228b22",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        Add to cart
                      </Link>
                      <Link
                        to=""
                        style={{
                          height: "35px",
                          backgroundColor: "#cccc00",
                          color: "white",
                          border: "1px solid #cccc00",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        Checkout
                      </Link>
                      <Link
                        to=""
                        style={{
                          height: "35px",
                          backgroundColor: "red",
                          color: "white",
                          border: "1px solid red",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          changeState(item.id, props.pageId);
                        }}
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemsGrid;
