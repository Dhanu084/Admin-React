import { FETCH_ALL_USERS, DELETE_USER } from "../actions/actionTypes";

export default function users(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.users;
    case DELETE_USER:
      let newUserArray = state.map((user) => user.id != action.id);
      return newUserArray;
    default:
      return state;
  }
}
