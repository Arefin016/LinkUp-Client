
import axios from 'axios';


const API_BASE_URL = 'https://link-up-shaharul.vercel.app'; 

// Function to fetch all messages
export const fetchMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error; 
  }
};

// Function to send a new message
export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/messages`, message);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error; 
  }
};
