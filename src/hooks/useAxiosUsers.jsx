import axios from "axios"

const axiosUsers = axios.create({
  baseURL: "https://link-up-shaharul.vercel.app",
})

const useAxiosUsers = () => {
  return axiosUsers
}

export default useAxiosUsers