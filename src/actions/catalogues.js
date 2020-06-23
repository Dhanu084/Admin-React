import { FETCH_ALL_CATEGORIES } from "./actionTypes";
import { APIUrls } from "../helpers/urls";

export function fetchAllCategories() {
  return (dispatch) => {
    const url = APIUrls.fetchProducts();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log("catalogues", data);
        dispatch(fetchProducts(data));
      });
  };
}
export function fetchProducts(catalogues) {
  return {
    type: FETCH_ALL_CATEGORIES,
    catalogues,
  };
}
