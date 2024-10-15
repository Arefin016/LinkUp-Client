import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/NavBar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import ChatBox from "../pages/ChatBox/ChatBox";
import PrivateRoute from "../Routes/PrivateRoute"; // Import the PrivateRoute component

const Main = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false); // State to control chat box visibility

  const toggleChatBox = () => {
    setIsChatBoxOpen((prev) => !prev); // Toggle the chat box open/close state
  };

  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div>
      {/* Header and Footer rendering based on route */}
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}

      {/* Chatbox toggle button */}
      <button
        onClick={toggleChatBox}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-200"
      >
        {isChatBoxOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* ChatBox wrapped inside PrivateRoute */}
      {isChatBoxOpen && (
        <PrivateRoute>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 h-3/4 overflow-hidden relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={toggleChatBox}
              >
                &times;
              </button>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Chat</h2>
                <ChatBox />
              </div>
            </div>
          </div>
        </PrivateRoute>
      )}
    </div>
  );
};

export default Main;
