import {
  FETCH_ALL_CATEGORIES,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from "../actions/actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.catalogues;
    case DELETE_CATEGORY:
      let newArray = state.filter((category) => category.id != action.id);
      return newArray;
    case EDIT_CATEGORY:
      let newCategoryState = state.map((category) => {
        if (category.id == action.id) {
          return {
            ...category,
            name: action.name,
          };
        }
        return category;
      });
      return newCategoryState;
    default:
      return state;
  }
}
