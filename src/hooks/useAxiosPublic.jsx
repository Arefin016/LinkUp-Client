import axios from "axios"

const axiosPublic = axios.create({
  baseURL:
    "https://link-up-server-pbarqf0zy-shah-arefin-ahmeds-projects.vercel.app",
})

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
