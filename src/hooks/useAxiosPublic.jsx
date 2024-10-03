import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 0,
});

export default axiosPublic;