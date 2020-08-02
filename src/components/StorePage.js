import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ItemsGrid from "./common/ItemsGrid";
import SearchFilter from "./common/SearchFilter";
import VideoGallery from "./common/VideoGallery";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Slider from "./common/Slider";
import pageStore from "../stores/pageStore";
import productStore from "../stores/productStore";
import { loadPageById } from "../actions/pageActions";
import * as productActions from "../actions/productActions";
import * as contentActions from "../actions/contentActions";

function StorePage(props) {
  const [pageId, setPageId] = useState(0);
  const [products, setProducts] = useState(productStore.getProducts());
  const [page, setPage] = useState(pageStore.getPage());
  const videoRef = useRef();
  useEffect(() => {
    pageStore.addChangeListener(onChange);
    productStore.addChangeListener(onProductsChange);

    const id = props.match.params.id ? props.match.params.id : 0;

    loadPageById(id);

    productActions.loadProductsByStoreId(id);
    setPageId(id);
    contentActions.loadContentsByPageId(id);

    return () => {
      pageStore.removeChageListener(onChange);
      productStore.removeChageListener(onProductsChange);
    };
  }, [props.match.params.id]);
  //Onchange functions for listeners
  function onChange() {
    setPage(pageStore.getPage());
  }
  function onProductsChange() {
    setProducts(productStore.getProducts());
  }
  function categoryChangeHandler({ target }) {
    productActions.loadProductsByStoreAndCategory(pageId, target.value);
  }

  function filterChangeHandler({ target }) {
    productActions.loadProductsByStoreAndFilter(pageId, "color", target.value);
  }

  const useStyles = makeStyles((theme) => page.classes);
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header
        classes={classes}
        logo={page.logo}
        menu={page.headerMenu}
        pageId={page.id}
        inputRef={videoRef}
      />
      <main>
        <Slider slides={page.slides} classes={classes} />
        <Container className={classes.cardGrid} maxWidth="lg">
          <SearchFilter
            onCategoryChange={categoryChangeHandler}
            onFilterChange={filterChangeHandler}
            classes={classes}
            categories={page.categories}
            filters={page.filters}
          />
          <ItemsGrid items={products} classes={classes} />
          <VideoGallery
            inputRef={videoRef}
            video={page.video}
            classes={classes}
          />
          <Slider id="events-scroll" slides={page.offers} classes={classes} />
        </Container>
      </main>
      <Footer classes={classes} />
    </div>
  );
}

export default StorePage;
