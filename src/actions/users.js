import {
  FETCH_ALL_USERS,
  DELETE_USER,
  SAVE_USER,
  ADD_USER,
} from "./actionTypes";
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

export function deleteuser(id) {
  return {
    type: DELETE_USER,
    id,
  };
}

export function saveUser(id, name, email) {
  return {
    type: SAVE_USER,
    id,
    name,
    email,
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}
