import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://1935443b3c23.ngrok.io/products/";

export function getProducts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getProductsByStoreId(id) {
  return fetch(baseUrl + "?storeId=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((products) => {
        return products;
      });
    })
    .catch(handleError);
}

export function getProductsByStoreAndCategory(storeId, category) {
  return fetch(baseUrl + "?categoryId=" + category + "&storeId=" + storeId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((products) => {
        return products;
      });
    })
    .catch(handleError);
}

export function getProductsByStoreAndFilter(storeId, filter, value) {
  return fetch(baseUrl + "?storeId=" + storeId + "&" + filter + "=" + value)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((products) => {
        return products;
      });
    })
    .catch(handleError);
}
