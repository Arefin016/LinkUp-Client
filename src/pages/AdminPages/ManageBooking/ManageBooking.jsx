import React, { useEffect, useState } from "react" // Import axiosPublic directly
import zoomLogo from "../../../assets/Zoom.jpg"
import googleMeetLogo from "../../../assets/meet.png"
import useAxiosPublic from "../../../hooks/useAxiosPublic"

const ManageBooking = () => {
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const axiosPublic = useAxiosPublic()

  // Fetch event data when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosPublic.get("/events")
        setEvents(response.data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchEvents()
  }, []) 
  const openUpdateModal = (event) => {
    setSelectedEvent(event) 
    setIsModalOpen(true) 
  }

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  // Update an event
  const handleUpdate = async () => {
    const { _id, title, description, start, end } = selectedEvent

    try {
      const response = await axiosPublic.put(`/events/${_id}`, {
        title,
        description,
        start: new Date(start),
        end: new Date(end),
      })
      setEvents(
        events.map((event) => (event._id === _id ? response.data : event))
      )
      closeModal() // Close modal after successful update
    } catch (err) {
      setError(err.message)
    }
  }

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSelectedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  // Cancel (delete) an event
  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this event?")) {
      try {
        await axiosPublic.delete(`/events/${id}`)
        setEvents(events.filter((event) => event._id !== id))
      } catch (err) {
        setError(err.message)
      }
    }
  }
  return (
    <div className="event-history-container mx-auto mt-10 p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Manage Bookings</h2>
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
              <div className="flex items-start">
                <img
                  src={
                    event.meetingType === "zoom"
                      ? zoomLogo
                      : event.meetingType === "meet"
                      ? googleMeetLogo
                      : "https://via.placeholder.com/50"
                  }
                  alt={event.title}
                  className="w-12 h-12 rounded-full mr-4"
                />
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

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => openUpdateModal(event)}
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

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Update Event</h3>
            <div className="mb-4">
              <label className="block font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={selectedEvent.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={selectedEvent.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Start Date</label>
              <input
                type="date"
                name="start"
                value={selectedEvent.start.substring(0, 10)} // Extract only date part
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                name="end"
                value={selectedEvent.end.substring(0, 10)}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageBooking
