import dispatcher from "../appDispatcher";
import * as contentApi from "../api/contentApi";
import actionTypes from "./actionTypes";

export function loadcontentByPageIdAndSectionId(pageId, sectionId) {
  return contentApi.getContentByPageAndId(pageId, sectionId).then((content) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CONTENT_BY_ID,
      content,
    });
  });
}

export function loadContentsByPageId(pageId) {
  return contentApi.getContentsByPageId(pageId).then((contents) => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CONTENTS_BY_PAGE,
      contents,
    });
  });
}
