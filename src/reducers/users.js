import { FETCH_ALL_USERS } from "../actions/actionTypes";

export default function users(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}
