import React, { useEffect, useState } from "react";
import axiosClient from "../../../Axios/Axios"; // Assuming axiosClient is in src/axios.js

const EventHistory = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  // Fetch event data when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosClient.get("/events"); // Replace with your actual endpoint
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events: ", err);
        setError(err.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-history-container mx-auto mt-10 p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Event History</h2>
      {error ? (
        <p className="text-red-500 text-center">Failed to load events: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Start:</strong> {new Date(event.start).toLocaleString()}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>End:</strong> {new Date(event.end).toLocaleString()}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventHistory;
