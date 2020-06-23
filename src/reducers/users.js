import {
  FETCH_ALL_USERS,
  DELETE_USER,
  SAVE_USER,
  ADD_USER,
} from "../actions/actionTypes";

export default function users(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.users;
    case DELETE_USER:
      let newUserArray = state.filter((user) => user.id != action.id);
      return newUserArray;
    case SAVE_USER:
      let newArray = state.map((user) => {
        if (user.id == action.id) {
          return {
            ...user,
            name: action.name,
            email: action.user,
          };
        }
        return user;
      });
      return newArray;
    case ADD_USER:
      return [action.user, ...state];
    default:
      return state;
  }
}
