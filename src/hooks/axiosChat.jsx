import axios from "axios"

// Configure your Axios instance
const axiosInstance = axios.create({
  baseURL: "https://link-up-shaharul-api.vercel.app",
})

// Fetch messages from the server
export const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get("/chat")
    return response.data
  } catch (error) {
    console.error("Error fetching messages:", error)
    return []
  }
}

// Send a message to the server
export const sendMessage = async (message) => {
  try {
    await axiosInstance.post("/chat", message) // Adjust the endpoint
  } catch (error) {
    console.error("Error sending message:", error)
  }
}
