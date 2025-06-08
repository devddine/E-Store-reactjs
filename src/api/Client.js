import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-type": "application/json; charset=UTF-8", Connection: "keep-alive" },
});

export default apiClient;
