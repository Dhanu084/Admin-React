import {
  FETCH_ALL_CATEGORIES,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_CATEGORY,
} from "./actionTypes";
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
export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    id,
  };
}

export function editCategory(id, name) {
  return {
    type: EDIT_CATEGORY,
    id,
    name,
  };
}

export function addCategory() {}
