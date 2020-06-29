import axios from "axios";
const authToken = localStorage.getItem("jwt");
const headers = authToken
  ? { headers: { Authorization: `Bearer ${authToken}` } }
  : {};
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  ...headers,
});
export default axiosInstance;