import React, { useState } from 'react';
import ChatBox from "../../ChatBox/ChatBox";
import ReviewCards from "../../RatingCards/RatingCards";
import Banner from "../Banner/Banner";
import SolutionsSection from "../SolutionsSection/SolutionsSection";

const Home = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false); // State to control chat box visibility

  const toggleChatBox = () => {
    setIsChatBoxOpen((prev) => !prev); // Toggle the chat box open/close state
  };

  return (
    <div>
      <Banner />
      <SolutionsSection />
      
      {/* ChatBox Toggle Button */}
      <button 
        onClick={toggleChatBox}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-200"
      >
        {isChatBoxOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      
      {/* ChatBox Modal */}
      {isChatBoxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 h-3/4 overflow-hidden relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleChatBox}
            >
              &times; {/* Close icon */}
            </button>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Chat</h2>
              
              <ChatBox />
            </div>
          </div>
        </div>
      )}
      
      <div className="overflow-hidden w-full">
        <h2 className="md:text-5xl text-5xl mt-5 font-bold text-[#0B3558] text-center">
          Customer Feedback
        </h2>
        <marquee behavior="scroll" direction="right">
          <ReviewCards />
        </marquee>
      </div>
    </div>
  );
};

export default Home;
