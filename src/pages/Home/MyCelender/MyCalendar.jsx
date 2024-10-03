import React, { useState, useContext } from "react"
import { Calendar } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { dateFnsLocalizer } from "react-big-calendar"
import enUS from "date-fns/locale/en-US"
import Modal from "react-modal"
import Swal from "sweetalert2"
import { AuthContext } from "../../../providers/AuthProvider"

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
const initialEvents = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2024, 8, 18, 10, 0), // September 18, 2024, at 10:00 AM
    end: new Date(2024, 8, 18, 12, 0), // September 18, 2024, at 12:00 PM
    meetingType: "", // Add meetingType property
  },
]

// Updated modal styles for responsiveness and centering
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    maxHeight: "500px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    overflowY: "auto",
    backgroundColor: "white",
    border: "none",
    borderRadius: "8px",
    zIndex: "1001", // Ensure the modal has a high z-index
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1000", // Overlay also needs a high z-index
  },
}

const MyCalendar = () => {
  const { user } = useContext(AuthContext) // Use AuthContext to get the logged-in user's info
  const [myEvents, setMyEvents] = useState(initialEvents)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    meetingType: "", // Add meetingType to the new event state
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
        "https://link-up-server-pbarqf0zy-shah-arefin-ahmeds-projects.vercel.app/events",
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
    const { title, startDate, endDate, description, meetingType } = newEvent

    // Validate that all fields are filled and dates are correct
    if (!title || !startDate || !endDate || !description) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill out all the fields.",
      })
      return
    }

    if (new Date(startDate) >= new Date(endDate)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Dates",
        text: "End date must be later than start date.",
      })
      return
    }

    const newEventData = {
      title,
      start: new Date(startDate),
      end: new Date(endDate),
      description,
      meetingType, // Add meetingType to event data
    }

    // Add the new event to the local state
    setMyEvents([...myEvents, newEventData])

    // Send event data to the backend
    await addEventToBackend(newEventData)

    // Clear the input fields after submission
    setNewEvent({
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      meetingType: "",
    })

    // Close the modal
    setModalIsOpen(false)
  }

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  // Event color differentiation
  const eventPropGetter = (event) => {
    let backgroundColor
    switch (event.meetingType) {
      case "zoom":
        backgroundColor = "lightblue" // Example color for Zoom
        break
      case "meet":
        backgroundColor = "lightgreen" // Example color for Google Meet
        break
      default:
        backgroundColor = "lightgray" // Default color
    }
    return { style: { backgroundColor } }
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
            style={{ height: "60vh", backgroundColor: "white", zIndex: "1" }}
            views={["month", "week", "day", "agenda"]}
            defaultView="month"
            className="text-xs md:text-sm text-center font-bold"
            eventPropGetter={eventPropGetter} // Set event colors
          />
        </div>

        {/* Modal for adding new events */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={modalStyles}
          ariaHideApp={false}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Add New Event</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Event Title</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                className="w-full p-2 border rounded text-center"
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
                className="w-full p-2 border rounded text-center"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date and Time</label>
              <input
                type="datetime-local"
                name="endDate"
                value={newEvent.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded text-center"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                className="w-full p-2 border rounded text-center"
                placeholder="Enter event description"
              ></textarea>
            </div>
            {/* Dropdown for selecting meeting type */}
            <div>
              <label className="block text-gray-700">Meeting Type</label>
              <select
                name="meetingType"
                value={newEvent.meetingType}
                onChange={handleChange}
                className="w-full p-2 border rounded text-center"
              >
                <option value="">None</option>
                <option value="zoom">Zoom</option>
                <option value="meet">Google Meet</option>
              </select>
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
