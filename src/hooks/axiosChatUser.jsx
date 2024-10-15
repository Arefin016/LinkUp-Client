
import axios from 'axios';

export const fetchUser = async () => {
  try {
    const response = await axios.get('https://link-up-shaharul.vercel.app/users');
    return response.data; // Assuming the user data is directly in response.data
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
