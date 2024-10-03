import axios from "axios"

const axiosUsers = axios.create({
  baseURL: "http://localhost:5000",
})

const useAxiosUsers = () => {
  return axiosUsers
}

export default useAxiosUsers