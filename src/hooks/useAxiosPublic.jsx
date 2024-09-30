import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://link-up-server-three.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
