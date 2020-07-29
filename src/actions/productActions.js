import dispatcher from "../appDispatcher";
import * as productApi from "../api/productApi";
import actionTypes from "./actionTypes";

export function loadProducts() {
  return productApi.getProducts().then((products) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PRODUCTS,
      products,
    });
  });
}

export function loadProductsByStoreId(id) {
  return productApi.getProductsByStoreId(id).then((products) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PRODUCTS,
      products,
    });
  });
}

export function loadProductsByStoreAndCategory(storeId, category) {
  return productApi
    .getProductsByStoreAndCategory(storeId, category)
    .then((products) => {
      //Hey dispatcher, go tell all stores that a course was just created
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_PRODUCTS,
        products,
      });
    });
}
