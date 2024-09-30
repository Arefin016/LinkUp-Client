// src/axios.js
import axios from "axios";

// Create an Axios instance
const axiosClient = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:5000", // Replace with your backend base URL
  timeout: 0, // Set timeout (optional)
=======
  baseURL: "https://link-up-server-three.vercel.app",
  timeout: 0, // No timeout
>>>>>>> fac4f274a757fbe8e7b6a49aba0bc456de7e0bd3
  headers: {
    "Content-Type": "application/json", // Global content type
  },
});

// Add a request interceptor with logging
axiosClient.interceptors.request.use(
  (config) => {
    console.log(`Requesting: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor with error logging
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
      console.error(`Response Data: ${JSON.stringify(error.response.data)}`);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
