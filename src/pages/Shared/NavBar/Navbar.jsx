import React, { useContext, useEffect, useState, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider" // Adjust path based on your file structure
import "./navbar.css"
import useAdmin from "../../../hooks/useAdmin"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [theme, setTheme] = useState("light")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null) // Create a ref for the dropdown

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.querySelector("html").setAttribute("data-theme", savedTheme)
  }, [])

  const handleTheme = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light"
    setTheme(selectedTheme)
    localStorage.setItem("theme", selectedTheme)
    document.querySelector("html").setAttribute("data-theme", selectedTheme)
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully")
      })
      .catch((error) => console.error("Logout failed: ", error))
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const closeDropdown = (e) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false)
    }
  }

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
        <NavLink className="nav-link" to="/guides/introduction">
          Guides
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink className="nav-link" to="/dashboard/adminDashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink className="nav-link" to="/dashboard/userDashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      {!user && (
        <>
          <li>
            <Link to="/login">
              <button className="btn btn-sm btn-outline">Log In</button>
            </Link>
          </li>
          <li>
            <Link to="/signUp">
              <button className="btn btn-sm btn-primary">Join Us</button>
            </Link>
          </li>
        </>
      )}
    </>
  )

  const userProfile = user ? (
    <div className="relative">
      <img
        src={
          user?.photoURL || "https://i.ibb.co/5nqdd5h/profile-pic-linkup.jpg"
        }
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-emerald-500 transition duration-200 hover:scale-110"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
        >
          <div className="py-2 px-4 text-gray-700">
            {user?.displayName || "No user"}
          </div>
          <hr />
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 text-left text-gray-700 hover:bg-gray-100 transition duration-200"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  ) : null

  // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown)
    return () => {
      document.removeEventListener("mousedown", closeDropdown)
    }
  }, [])

  return (
    <div className="navbar sticky top-0 z-50 bg-white  justify-between px-6 py-4 shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg transition-all"
          >
            {links}
          </ul>
        </div>

        <Link to="/">
          <h1 className="font-right font-extrabold text-2xl lg:text-3xl text-shadow-purple transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-emerald-500">L</span>
            <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
              inkUp
            </span>
          </h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-8">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-x-3">
        {userProfile}
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
