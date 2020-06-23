import { FETCH_ALL_CATEGORIES } from "../actions/actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.catalogues;
    default:
      return state;
  }
}
