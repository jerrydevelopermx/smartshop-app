import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _products = [];
let _product = {};

class ProductStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChageListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getProducts() {
    return _products;
  }
  getProductsByStoreId(id) {
    return _products.filter((product) => product.storeId === parseInt(id));
  }
  getProductsByCategory(category) {
    return _products.filter((product) => product.category === category);
  }
  getProductById(id) {
    return _products.find((product) => product.id === parseInt(id));
  }
}

const store = new ProductStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_PRODUCTS:
      _products = action.products;
      store.emitChange();
      break;
    case actionTypes.LOAD_PRODUCT:
      _product = action.product;
      store.emitChange();
      break;

    default:
    //Nothing to do here
  }
});

export default store;
