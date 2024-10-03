import React, { useEffect, useState } from "react" // Assuming axiosClient is set up for making API requests
import useAxiosPublic from "../../../hooks/useAxiosPublic"

const EventHistory = () => {
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)

  const axiosPublic = useAxiosPublic()

  // Fetch event data when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosPublic.get("/events", { timeout: 5000 }) // Your API endpoint
        setEvents(response.data)
      } catch (err) {
        console.error("Error fetching events: ", err)
        setError(err.message)
      }
    }

    fetchEvents()
  }, [])

  // Update an event
  const handleUpdate = async (id) => {
    const updatedTitle = prompt("Enter new title:")
    const updatedDescription = prompt("Enter new description:")
    const updatedStart = prompt("Enter new start date (YYYY-MM-DD):")
    const updatedEnd = prompt("Enter new end date (YYYY-MM-DD):")

    try {
      const response = await axiosPublic.put(`/events/${id}`, {
        title: updatedTitle,
        description: updatedDescription,
        start: new Date(updatedStart),
        end: new Date(updatedEnd),
      })
      setEvents(
        events.map((event) => (event._id === id ? response.data : event))
      )
    } catch (err) {
      console.error("Error updating event: ", err)
      setError(err.message)
    }
  }

  // Cancel (delete) an event
  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this event?")) {
      try {
        await axiosPublic.delete(`/events/${id}`)
        setEvents(events.filter((event) => event._id !== id))
      } catch (err) {
        console.error("Error deleting event: ", err)
        setError(err.message)
      }
    }
  }

  return (
    <div className="event-history-container mx-auto mt-10 p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Event History</h2>
      {error ? (
        <p className="text-red-500 text-center">
          Failed to load events: {error}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              {/* Card content - Flexbox for user image and event info */}
              <div className="flex items-start">
                {/* User image */}
                <img
                  src={event.userImage || "https://via.placeholder.com/50"} // Use actual image URL or placeholder
                  alt={event.title}
                  className="w-12 h-12 rounded-full mr-4"
                />
                {/* Event info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Start:</strong>{" "}
                    {new Date(event.start).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>End:</strong> {new Date(event.end).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mt-4">{event.description}</p>
                </div>
              </div>

              {/* Update and Cancel buttons */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => handleUpdate(event._id)}
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  onClick={() => handleCancel(event._id)}
                >
                  Cancel Event
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EventHistory
