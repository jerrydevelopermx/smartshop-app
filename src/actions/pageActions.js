import dispatcher from "../appDispatcher";
import * as pageApi from "../api/pageApi";
import actionTypes from "./actionTypes";

export function loadPages() {
  return pageApi.getPages().then((pages) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PAGES,
      pages,
    });
  });
}

export function loadPageById(id) {
  return pageApi.getPageById(id).then((page) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PAGE_BY_ID,
      page,
    });
  });
}
