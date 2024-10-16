import axios from "axios"

const axiosUsers = axios.create({
  baseURL: "https://link-up-shaharul.vercel.app",
  timeout: 0,
})

const useAxiosUsers = () => {
  return axiosUsers
}

export default useAxiosUsers
