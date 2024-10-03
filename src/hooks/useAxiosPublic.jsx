import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://link-up-shaharul.vercel.app"
});

export default axiosPublic;