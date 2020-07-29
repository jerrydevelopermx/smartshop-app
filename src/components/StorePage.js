import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ItemsGrid from "./common/ItemsGrid";
import SearchFilter from "./common/SearchFilter";
import VideoGallery from "./common/VideoGallery";
import Gallery from "./common/Gallery";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Slider from "./common/Slider";
import pageStore from "../stores/pageStore";
import productStore from "../stores/productStore";
import { loadPages, loadPageById } from "../actions/pageActions";
import * as productActions from "../actions/productActions";

//let id = null;

function StorePage(props) {
  const [pages, setPages] = useState(pageStore.getPages());
  const [pageId, setPageId] = useState(0);

  const [products, setProducts] = useState(productStore.getProducts());
  const [page, setPage] = useState(pageStore.getPage());
  //const [storeProducts, setStoreProducts] = useState([]);

  /*useEffect(() => {
    //Listeners
    pageStore.addChangeListener(onChange);
    productStore.addChangeListener(onProductsChange);

    id = props.match.params.id; //from path /store/
    console.log(id, pages.length);

    if (pages.length === 0) {
      pageActions.loadPages();
    } else if (id) {
      setPage(pageStore.getPageById(id));
      if (products.length === 0) {
        productActions.loadProductsByStoreId(id);
      }
      setProducts(productStore.getProductsByStoreId(id));
    } else {
      setPage(pageStore.getPageById(0)); //setPage(pageStore.getPageById(id));
    }

    return () => pageStore.removeChageListener(onChange);
    //return () => productStores.removeChageListener(onProductsChange);
  }, [props.match.params.id, pages.length, products.length]); */

  useEffect(() => {
    pageStore.addChangeListener(onChange);
    productStore.addChangeListener(onProductsChange);
    //setPageId(props.match.params.id); //from path /store/
    const id = props.match.params.id ? props.match.params.id : 0;
    //console.log(Object.keys(pageStore.getPage()).length === 0);
    //if (Object.keys(pageStore.getPage()).length === 0) {
    loadPageById(id);
    //}

    productActions.loadProductsByStoreId(id);
    setPageId(id);
    /*
    if (id) {
      console.log("Aqui se abre la pagina: " + id);
      setPage(pageStore.getPageById(id));
    } else {
      console.log("Aqui se abre la pagina Home");
      setPage(pageStore.getPageById(0));
    } */
    return () => {
      pageStore.removeChageListener(onChange);
      productStore.removeChageListener(onProductsChange);
    };
  }, [props.match.params.id]);
  //Onchange functions for listeners
  function onChange() {
    console.log("on change");
    //expected one of ["lg","md","sm","xl","xs",false].
    setPage(pageStore.getPage());
  }
  function onProductsChange() {
    console.log("on products change");
    //expected one of ["lg","md","sm","xl","xs",false].
    console.log(productStore.getProducts());
    setProducts(productStore.getProducts());
  }

  function categoryChangeHandler({ target }) {
    console.log(pageId);
    productActions.loadProductsByStoreAndCategory(pageId, target.value);
    console.log(productStore.getProductsByCategory(target.value));
    //setProducts(productStore.getProductsByCategory(target.value));
  }

  const useStyles = makeStyles((theme) => page.classes);
  const classes = useStyles();
  //console.log(classes);

  return (
    <div className={classes.body}>
      <Header classes={classes} logo={page.logo} menu={page.headerMenu} />
      <main>
        <Slider slides={page.slides} classes={classes} />
        <Container className={classes.cardGrid} maxWidth="lg">
          <SearchFilter
            onCategoryChange={categoryChangeHandler}
            classes={classes}
            categories={page.categories}
            filters={page.filters}
          />
          <ItemsGrid items={products} classes={classes} />
          <VideoGallery video={page.video} classes={classes} />
          <Gallery />
        </Container>
      </main>
      <Footer classes={classes} />
    </div>
  );
}

export default StorePage;
