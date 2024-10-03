import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000", // Your backend base URL
});

export default axiosPublic;