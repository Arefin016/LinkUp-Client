<<<<<<< HEAD
import React, { useState, useContext } from "react"
import { Calendar } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { dateFnsLocalizer } from "react-big-calendar"
import enUS from "date-fns/locale/en-US"
import Modal from "react-modal"
import Swal from "sweetalert2"
import AOS from "aos"
import axios from "axios"
import { AuthContext } from "../../../providers/AuthProvider" // Import AuthContext
=======
import React, { useState, useContext } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import enUS from "date-fns/locale/en-US";
import Modal from "react-modal";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider"; // Import AuthContext
>>>>>>> 124295410bd2a75efdbb3c69ce8e39c9f2647eb0

// Setup the date localization
const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Initial events to display
const events = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2024, 8, 18, 10, 0), // September 18, 2024, at 10:00 AM
    end: new Date(2024, 8, 18, 12, 0), // September 18, 2024, at 12:00 PM
  },
]

// Updated modal styles for responsiveness and centering
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "90%", // Make it responsive
    maxWidth: "600px", // Max width for large screens
    height: "auto",
    maxHeight: "90vh", // Prevent overflow
    marginRight: "-50%",
    transform: "translate(-50%, -50%)", // Center the modal
    padding: "20px", // Add padding for better design
    overflowY: "auto", // Scroll if content exceeds
    backgroundColor: "white", // Solid background color for modal
    border: "none", // Remove border if needed
    borderRadius: "8px", // Rounded corners
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
  },
}

const MyCalendar = () => {
  const { user } = useContext(AuthContext) // Use AuthContext to get the logged-in user's info
  const [myEvents, setMyEvents] = useState(events)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [selectedSlot, setSelectedSlot] = useState(null)

  // Function to handle adding new events
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end })
    setModalIsOpen(true)
  }

  // Function to send event data to the backend
  const addEventToBackend = async (eventDetails) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/add-event",
        eventDetails
      )
      console.log("Event added to backend:", response.data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Event added successfully!",
        showConfirmButton: false,
        timer: 1500,
      })
    } catch (error) {
      console.error("Error adding event to backend:", error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding the event!",
      })
    }
  }

  // Function to handle event creation
  const handleSubmit = async () => {
    const { title, startDate, endDate, description } = newEvent

    if (title && startDate && endDate && description) {
      const newEventData = {
        title,
        start: new Date(startDate),
        end: new Date(endDate),
        description,
      }

      // Add the new event to the local state
      setMyEvents([...myEvents, newEventData])

      // Send event data to the backend
      await addEventToBackend(newEventData)

      // Close the modal
      setModalIsOpen(false)
    } else {
      alert("Please fill out all the fields.")
    }
  }

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="calendar-container mx-5 mt-32 p-5 bg-blue-50 rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-6xl font-abril font-extrabold text-center my-4 text-gray-800 dark:text-white">
          My Scheduling Calendar
        </h2>
        <div className="lg:mx-auto lg:max-w-4xl">
          <Calendar
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            style={{ height: "60vh", backgroundColor: "white" }} // White background for the calendar
            views={["month", "week", "day", "agenda"]}
            defaultView="month"
            className="text-xs md:text-sm text-center font-bold" // Center and bold text
          />
        </div>

        {/* Modal for adding new events */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={modalStyles}
        >
          <h2 className="text-xl font-bold mb-4">Add New Event</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Event Title</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter event title"
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Date and Time</label>
              <input
                type="datetime-local"
                name="startDate"
                value={newEvent.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date and Time</label>
              <input
                type="datetime-local"
                name="endDate"
                value={newEvent.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter event description"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Event
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default MyCalendar
