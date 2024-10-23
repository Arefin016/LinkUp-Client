import axios from "axios"

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return axiosInstance
}

export default useAxiosPublic
