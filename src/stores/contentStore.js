import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _content = {};
let _contents = [];

class ContentStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChageListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getContent() {
    return _content;
  }

  getContents() {
    return _contents;
  }

  getContentBySectionId(sectionId) {
    return _contents.find((content) => content.sectionId === sectionId);
  }
}

const store = new ContentStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_CONTENT_BY_ID:
      _content = action.content;
      store.emitChange();
      break;
    case actionTypes.LOAD_CONTENTS_BY_PAGE:
      _contents = action.contents;
      store.emitChange();
      break;

    default:
    //Nothing to do here
  }
});

export default store;
