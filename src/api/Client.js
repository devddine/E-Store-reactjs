import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

export default apiClient;
