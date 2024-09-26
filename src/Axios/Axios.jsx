// src/axios.js
import axios from "axios"

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: "https://link-up-server-nine.vercel.app", // Replace with your backend base URL
  timeout: 10000, // Set timeout (optional)
  headers: {
    "Content-Type": "application/json", // Global content type
  },
})

// Add a request interceptor (optional)
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
