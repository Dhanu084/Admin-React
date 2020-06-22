import { FETCH_ALL_USERS } from "./actionTypes";
import { APIUrls } from "../helpers/urls";

export function fetchAllUsers() {
  return (dispatch) => {
    const url = APIUrls.fetchUsers();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        dispatch(allUsers(data));
      });
  };
}

export function allUsers(users) {
  return {
    type: FETCH_ALL_USERS,
    users,
  };
}
