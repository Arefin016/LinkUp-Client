import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const { user } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'https://link-up-shaharul.vercel.app', // Replace with your actual base URL
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken'); // Get the token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
