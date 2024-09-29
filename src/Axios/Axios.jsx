// src/axios.js
import axios from "axios"

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 0,
  headers: {
    "Content-Type": "application/json", 
  },
})


axiosClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // Handle request error
    return Promise.reject(error)
  }
)
axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error)
  }
)

export default axiosClient
