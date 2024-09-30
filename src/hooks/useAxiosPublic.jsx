import axios from "axios"

const axiosPublic = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:5000",
})
=======
  baseURL: "https://link-up-server-three.vercel.app",
});
>>>>>>> fac4f274a757fbe8e7b6a49aba0bc456de7e0bd3

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
