import axios from "../axios";
const handleLoginApi = (email, password) => {
  return axios.post("api/login", { email: email, password: password });
};
const getAllUsers = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};
export { handleLoginApi, getAllUsers };
