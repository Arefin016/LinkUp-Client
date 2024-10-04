import React, { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider" // Adjust path based on your file structure
import "./navbar.css"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) // Access AuthContext for user data and logout
  const [theme, setTheme] = useState("light")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // For toggling the dropdown

  // Set theme from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.querySelector("html").setAttribute("data-theme", savedTheme)
  }, [])

  // Toggle between dark and light theme
  const handleTheme = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light"
    setTheme(selectedTheme)
    localStorage.setItem("theme", selectedTheme)
    document.querySelector("html").setAttribute("data-theme", selectedTheme)
  }

  // Handle user logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully")
      })
      .catch((error) => console.error("Logout failed: ", error))
  }

  // Toggle dropdown on profile picture click
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Define navigation links
  const links = (
    <>
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/aboutus">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/contactus">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/guides">
          Guides
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </>
  )

  // Display profile dropdown if the user is logged in
  const userProfile = user ? (
    <div className="relative">
      <img
        src={
          user?.photoURL || "https://i.ibb.co/5nqdd5h/profile-pic-linkup.jpg"
        }
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={toggleDropdown} // Toggle dropdown on click
      />
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="py-2 px-4 text-gray-700">
            {user?.displayName || "No user"}
          </div>
          <hr />
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 text-left text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  ) : (
    <>
      <Link to="/login">
        <button className="btn btn-sm btn-outline">Log In</button>
      </Link>
      <Link to="/signUp">
        <button className="btn btn-sm btn-primary">Join Us</button>
      </Link>
    </>
  )

  return (
    <div className="navbar bg-white justify-center px-4 bg-opacity-30 shadow">
      <div className="navbar-start">
        {/* Hamburger icon for small screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Menu links for small screens */}
            {links}
          </ul>
        </div>

        <Link to="/">
          <h1 className="font-right font-extrabold lg:text-3xl text-xl text-shadow-purple text-gray-700 dark:text-green-50">
            <span className="text-emerald-500">L</span>inkUp
          </h1>
        </Link>
      </div>

      {/* Menu links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-8 ">{links}</ul>
      </div>

      {/* Right side: user profile or login/register buttons */}
      <div className="navbar-end flex items-center gap-x-3">
        {userProfile}

        {/* Theme toggle */}
        <input
          onChange={handleTheme}
          type="checkbox"
          className="toggle theme-controller mx-6"
          checked={theme === "dark"}
        />
      </div>
    </div>
  )
}

export default Navbar
