import React from "react"
import { FaUsers,  FaHome } from "react-icons/fa" 
import {
  FcBookmark,
  FcContacts,
  FcGallery,
  FcHome,
  FcRating,FcNook,
} from "react-icons/fc"

import { Link, NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import useAdmin from "../../../hooks/useAdmin"

const Sidebar = () => {
  const { user } = useAuth()

  //TODO:
  const [isAdmin] = useAdmin()

  return (
    <aside className="flex side flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <div className="relative mx-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
         
          <div className="divider"></div>

          {isAdmin ? (
            <>
              {/* Admin Dashboard */}
              <NavLink
                to="/dashboard/adminDashboard"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>

                <span className="mx-2 text-sm font-medium">
                  Admin Dashboard
                </span>
              </NavLink>
              {/* Admin User */}
              <NavLink
                to="/dashboard/adminHome"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FaHome />
                <span className="mx-2 text-sm font-medium">Admin Home</span>
              </NavLink>

              {/* Manage Booking Section */}
              <NavLink
                to="/dashboard/manageBooking"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FcBookmark /> {/* rating icon */}
                <span className="mx-2 text-sm font-medium">
                  Manage Bookings
                </span>
              </NavLink>

              {/* All Users */}
              <NavLink
                to="/dashboard/allUser"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FaUsers /> {/* rating icon */}
                <span className="mx-2 text-sm font-medium">All Users</span>
              </NavLink>

              {/* ADD Review & rating */}
              <NavLink
                to="/dashboard/Rating"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FcRating /> {/* rating icon */}
                <span className="mx-2 text-sm font-medium">
                  ADD Review & rating
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/notePad"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FcNook /> 
                <span className="mx-2 text-sm font-medium">
                  Take Your Note
                </span>
              </NavLink>
            </>
          ) : (
            <>
              {/* User information */}
              <NavLink
                to="/dashboard/userDashboard"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FaUsers />
                <span className="mx-2 text-sm font-medium">User Home</span>
              </NavLink>

              {/* review section */}
              <NavLink
                to="/dashboard/Rating"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FcRating /> {/* rating icon */}
                <span className="mx-2 text-sm font-medium">
                  ADD Review & rating
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/notePad"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
              >
                <FcNook /> 
                <span className="mx-2 text-sm font-medium">
                  Take Your Note
                </span>
              </NavLink>
            </>
          )}
        </nav>
        {/* this is the common navlink  */}
        <nav className="flex-1 -mx-3 space-y-3 ">
          {/*This is Divider  */}
          <div className="divider"></div>
          {/* This is the home route start */}
          <NavLink
            to="/"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
          >
            <FcHome /> {/* Home icon */}
            <span className="mx-2 text-sm font-medium">Home</span>
          </NavLink>
          {/*This is the home route end  */}
          {/* This is the Contact route start */}
          <NavLink
            to="/contactus"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
          >
            <FcContacts /> {/* Home icon */}
            <span className="mx-2 text-sm font-medium">Contact</span>
          </NavLink>
          {/*This is the Contact route end  */}
          {/* This is the Guides route start */}
          <NavLink
            to="/guides"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-orange-600"
          >
            <FcGallery /> {/* Home icon */}
            <span className="mx-2 text-sm font-medium">Guides</span>
          </NavLink>
          {/*This is the Guides route end  */}
        </nav>

        <div className="mt-6">


          <div className="flex items-center justify-between mt-6">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src={user?.photoURL}
                alt="No Image"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {user?.displayName}
              </span>
            </a>

            <Link
              to="/"
              href="#"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
