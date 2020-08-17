import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://d86a0f04e298.ngrok.io/pages/";

export function getPages() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getPageById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((pages) => {
        if (pages.length !== 1) throw new Error("Page not found: " + id);
        return pages[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}
