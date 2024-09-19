import React, { useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import enUS from "date-fns/locale/en-US"; // ES6 import for date-fns locale
import Modal from "react-modal"; // Import Modal
import AOS from "aos"
// Setup the date localization
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Initial events to display
const events = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2024, 8, 18, 10, 0), // September 18, 2024, at 10:00 AM
    end: new Date(2024, 8, 18, 12, 0), // September 18, 2024, at 12:00 PM
  },
];

// Modal styles (you can customize as needed)
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MyCalendar = () => {
  const [myEvents, setMyEvents] = useState(events);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal visibility state
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Function to handle adding new events
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setModalIsOpen(true); // Open modal on date click
  };

  // Function to handle event creation
  const handleSubmit = () => {
    const { title, startDate, endDate, description } = newEvent;

    if (title && startDate && endDate && description) {
      setMyEvents([
        ...myEvents,
        { title, start: new Date(startDate), end: new Date(endDate), description },
      ]);
      setModalIsOpen(false); // Close the modal after submission
    } else {
      alert("Please fill out all the fields.");
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  return (
    <div data-aos="flip-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="calendar-container mx-5 my-5 p-5 bg-blue-50 rounded-lg shadow-lg">
      <h2 className="text-2xl text-gray-800 font-semibold text-center mb-4">
        My Scheduling Calendar
      </h2>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
      />

      {/* Modal for adding new events */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={modalStyles}>
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
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
              Add Event
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyCalendar;
