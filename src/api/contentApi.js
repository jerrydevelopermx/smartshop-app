import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://f1b595e8f179.ngrok.io/sectionsContent/";

export function getContentByPageAndId(pageId, sectionId) {
  return fetch(baseUrl + "?pageId=" + pageId + "&sectionId=" + sectionId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((content) => {
        console.log(content);
        if (content.length !== 1)
          throw new Error("content not found: " + sectionId);
        return content[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function getContentsByPageId(pageId) {
  return fetch(baseUrl + "?pageId=" + pageId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((contents) => {
        return contents;
      });
    })
    .catch(handleError);
}
