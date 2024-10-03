import axios from "axios"

const axiosUsers = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 0,
})

const useAxiosUsers = () => {
  return axiosUsers
}

export default useAxiosUsers