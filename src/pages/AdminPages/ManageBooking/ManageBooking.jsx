import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import zoomLogo from "../../../assets/Zoom.jpg";
import googleMeetLogo from "../../../assets/meet.png";
import cardBg from "../../../assets/cardbg.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete, AiFillCopy } from "react-icons/ai"; // Importing the copy icon
import "./ManageBooking.css";

const ManageBooking = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const axiosPublic = useAxiosPublic();
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosPublic.get(
          `/add-event?page=${currentPage}&size=${itemsPerPage}`
        );
        const userEvents = response.data.filter(
          (event) => event.userId === userId
        );
        setEvents(userEvents);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchEvents();
  }, [userId, currentPage, itemsPerPage]); // Update dependencies

  const openUpdateModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdate = async () => {
    const { _id, title, description, start, end } = selectedEvent;
    try {
      const response = await axiosPublic.put(`/events/${_id}`, {
        title,
        description,
        start: new Date(start),
        end: new Date(end),
      });
      setEvents(
        events.map((event) => (event._id === _id ? response.data : event))
      );
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this event?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });

    if (result.isConfirmed) {
      try {
        await axiosPublic.delete(`/events/${id}`);
        setEvents(events.filter((event) => event._id !== id));
        Swal.fire("Cancelled!", "Your event has been cancelled.", "success");
      } catch (err) {
        setError(err.message);
        Swal.fire("Error!", "Failed to cancel the event.", "error");
      }
    }
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const copyToClipboard = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        Swal.fire(
          "Copied!",
          "The meeting link has been copied to your clipboard.",
          "success"
        );
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

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
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-indigo-500 p-6 flex flex-col justify-between h-[500px]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" +
                  cardBg +
                  ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Delete Button */}
              <button
                className="absolute top-4 right-4 text-gray-200 hover:text-red-600 transition"
                onClick={() => handleCancel(event._id)}
              >
                <AiFillDelete size={24} />
              </button>

              {/* Copy Link Button */}
              {event.link && (
                <button
                  className="absolute top-4 left-4 text-gray-200 hover:text-blue-600 transition"
                  onClick={() => copyToClipboard(event.link)}
                >
                  <AiFillCopy size={24} />
                </button>
              )}

              {/* Card Content */}
              <div className="flex items-start space-x-4 bg-opacity-50 p-4 rounded-lg bg-gradient-to-r from-black via-transparent to-black">
                <img
                  src={
                    event.meetingType === "zoom"
                      ? zoomLogo
                      : event.meetingType === "meet"
                      ? googleMeetLogo
                      : "https://via.placeholder.com/50"
                  }
                  alt={event.title}
                  className="w-16 h-16 rounded-full shadow-lg"
                />
                <div className="text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    <strong>Start:</strong>{" "}
                    {new Date(event.start).toLocaleString()}
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong>End:</strong> {new Date(event.end).toLocaleString()}
                  </p>
                  <div className="text-gray-300 mt-4 overflow-y-auto max-h-16 italic">
                    {event.description}
                  </div>
                </div>
              </div>

              {/* Link Section */}
              {event.link && (
                <div className="mt-4 text-center text-sm text-indigo-300 font-semibold">
                  {event.meetingType === "zoom" ? "Zoom Link" : "Meet Link"}:{" "}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-400 transition-colors duration-200"
                  >
                    Join Meeting
                  </a>
                </div>
              )}

              {/* Button Section */}
              <div className="mt-auto flex justify-center space-x-4">
                <button
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-xl transform transition hover:scale-105"
                  onClick={() => openUpdateModal(event)}
                >
                  Update
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
                type="datetime-local"
                name="start"
                value={new Date(selectedEvent.start).toISOString().slice(0, 16)}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">End Date</label>
              <input
                type="datetime-local"
                name="end"
                value={new Date(selectedEvent.end).toISOString().slice(0, 16)}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            className="border border-gray-300 rounded-lg"
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-slate-100 text-black rounded-lg mr-2"
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-slate-100 text-black"
                  : "bg-slate-100 text-black"
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-slate-100 text-black rounded-lg ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
