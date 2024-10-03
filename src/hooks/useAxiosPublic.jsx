import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://link-up-shaharul.vercel.app",
  timeout: 0,
});

export default axiosPublic;