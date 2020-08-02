import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _pages = [];
let _page = {};

class PageStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChageListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getPages() {
    return _pages;
  }

  getPage() {
    return _page;
  }

  getPageById(id) {
    return _pages.find((page) => page.id === parseInt(id));
  }

  getFiltersByCategory(categoryId) {
    return _page.categories.find((category) => category.id === categoryId)
      .filters;
  }
}

const store = new PageStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_PAGES:
      _pages = action.pages;
      store.emitChange();
      break;
    case actionTypes.LOAD_PAGE_BY_ID:
      _page = action.page;
      store.emitChange();
      break;

    default:
    //Nothing to do here
  }
});

export default store;
