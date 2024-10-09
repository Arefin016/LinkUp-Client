import axios from "axios"

export const axiosSecure = axios.create({
  baseURL: "https://link-up-shaharul.vercel.app",
})
const useAxiosSecure = () => {
  return axiosSecure
}

export default useAxiosSecure
