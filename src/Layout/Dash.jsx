import React, { useState } from "react";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Navbar Button */}
      <div className="flex justify-between md:hidden p-4 bg-gray-800 text-white">
        <h1 className="text-lg">Dashboard</h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isSidebarOpen ? "Close" : "Open"} Menu
        </button>
      </div>

      {/* Sidebar for larger screens */}
      <div className={`md:block md:w-1/4 ${isSidebarOpen ? 'block' : 'hidden'} bg-gray-200 p-4`}>
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className={`flex-1 p-4 ${isSidebarOpen ? 'hidden md:block' : 'block'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;
