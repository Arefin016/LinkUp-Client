import React, { useState, useContext } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import enUS from "date-fns/locale/en-US";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import emailjs from "emailjs-com";

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
const initialEvents = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2024, 8, 18, 10, 0), // September 18, 2024, at 10:00 AM
    end: new Date(2024, 8, 18, 12, 0), // September 18, 2024, at 12:00 PM
    meetingType: "",
  },
];

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
    zIndex: "1001",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1000",
  },
};

const MyCalendar = () => {
  const { user } = useContext(AuthContext);
  const [link, setLink] = useState(
    "https://us05web.zoom.us/j/87070806836?pwd=fLYbzd8fSsnnCZdmpfsbukUzzI54al.1"
  );
  const [myEvents, setMyEvents] = useState(initialEvents);
  const [meetLink, setMeetLink] = useState(
    "https://meet.google.com/pcw-vhgs-bpz"
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    meetingType: "",
    link: link,
  });
  const [selectedSlot, setSelectedSlot] = useState(null);

  const axiosInstance = useAxiosPublic();

  // Function to handle adding new events
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setModalIsOpen(true);
  };

  // Function to send email using EmailJS
  const sendEmail = (eventDetails) => {
    const emailParams = {
      event_title: eventDetails.title,
      event_start: eventDetails.start,
      event_end: eventDetails.end,
      event_description: eventDetails.description,
      recipient_email: user?.email,
      userName: user?.displayName,
      link: eventDetails.meetingType === "meet" ? meetLink : link,
      type: eventDetails.meetingType,
    };

    emailjs
      .send(
        "service_xqyql81", // Your EmailJS Service ID
        "template_9ugi12d", // Your EmailJS Template ID
        emailParams,
        "vz_mcsgnNSq-e__68" // Your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Please Check Your Email",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  // Function to send event data to the backend
  const addEventToBackend = async (eventDetails) => {
    const updateEvents = {
      ...eventDetails,
      link: eventDetails.meetingType === "meet" ? meetLink : link,
      userEmail: user?.email, // Add user email
    };
  
    try {
      const response = await axiosInstance.post(
        "https://link-up-shaharul.vercel.app/add-event",
        updateEvents
      );
      console.log("Event added to backend:", response.data);
    } catch (error) {
      console.error("Error adding event to backend:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding the event!",
      });
    }
  };

  // Function to handle event creation
  const handleSubmit = () => {
    const { title, startDate, endDate, description, meetingType } = newEvent;

    if (!title || !startDate || !endDate || !description || !meetingType) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill out all the fields.",
      });
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Dates",
        text: "End date must be later than start date.",
      });
      return;
    }

    // Open the preview modal
    setPreviewModalIsOpen(true);
  };

  // Function to confirm adding the event after preview
  const confirmAddEvent = async () => {
    const { title, startDate, endDate, description, meetingType } = newEvent;

    const newEventData = {
      title,
      start: new Date(startDate),
      end: new Date(endDate),
      description,
      meetingType,
    };

    setMyEvents([...myEvents, newEventData]);

    await addEventToBackend(newEventData);

    sendEmail(newEventData);

    setNewEvent({
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      meetingType: "",
    });

    // Close the modals
    setModalIsOpen(false);
    setPreviewModalIsOpen(false);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Function to share the event link on social media
  const shareEventLink = () => {
    const { title, startDate, endDate } = newEvent;
    const eventLink = encodeURIComponent(
      `Check out this event: ${title} on ${startDate} to ${endDate}. Join here: ${link}`
    );
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${eventLink}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${eventLink}`;

    window.open(facebookShareUrl, "_blank");
    // or use WhatsApp
    // window.open(whatsappShareUrl, "_blank");
  };

  // Event color differentiation
  const eventPropGetter = (event) => {
    let backgroundColor;
    switch (event.meetingType) {
      case "zoom":
        backgroundColor = "lightblue"; // Example color for Zoom
        break;
      case "meet":
        backgroundColor = "lightgreen"; // Example color for Google Meet
        break;
      default:
        backgroundColor = "lightgray"; // Default color
    }
    return { style: { backgroundColor } };
  };

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
            eventPropGetter={eventPropGetter}
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
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="datetime-local"
                name="startDate"
                value={newEvent.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="datetime-local"
                name="endDate"
                value={newEvent.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Meeting Type</label>
              <select
                name="meetingType"
                value={newEvent.meetingType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Type</option>
                <option value="zoom">Zoom</option>
                <option value="meet">Google Meet</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Add Event
            </button>
          </div>
        </Modal>

        {/* Preview Modal */}
        <Modal
          isOpen={previewModalIsOpen}
          onRequestClose={() => setPreviewModalIsOpen(false)}
          style={modalStyles}
          ariaHideApp={false}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Event Preview</h2>
          <div className="space-y-4">
            <p><strong>Title:</strong> {newEvent.title}</p>
            <p><strong>Start:</strong> {newEvent.startDate}</p>
            <p><strong>End:</strong> {newEvent.endDate}</p>
            <p><strong>Description:</strong> {newEvent.description}</p>
            <p><strong>Meeting Type:</strong> {newEvent.meetingType}</p>
            <p>
              <strong>Link:</strong>{" "}
              <a href={newEvent.link} target="_blank" rel="noopener noreferrer">
                {newEvent.link}
              </a>
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={shareEventLink}
                className="bg-blue-500 text-white py-1 px-2 rounded-md"
              >
                Share
              </button>
              <button
                onClick={confirmAddEvent}
                className="w-full bg-green-500 text-white py-2 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={() => setPreviewModalIsOpen(false)}
                className="w-full bg-red-500 text-white py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MyCalendar;
