import axios from "axios";

const API_URL = "http://localhost:8080/";

const users = () => {
  return axios
    .get(API_URL + "users")
    .then((response) => {
      return response.data.users;
    });
};

const user = (id) => {
  return axios
    .get(API_URL + "user", {id: id})
    .then((response) => {
      return response.data.user;
    });
};

export default {
  users,
  user,
};
