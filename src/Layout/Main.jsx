import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../pages/Shared/Navbar"
import { useLocation, useNavigate } from "react-router-dom" // Added useNavigate for redirect
import { useEffect } from "react"

// Import Home component
import Home from "../pages/Home/Home/Home" // Make sure the path is correct

const Main = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Assuming you have some authentication state (e.g., checking if the user is logged in)
  const isLoggedIn = localStorage.getItem("authToken") // Replace with your actual auth check

  // Redirect to home after successful login
  useEffect(() => {
    if (location.pathname === "/login" && isLoggedIn) {
      navigate("/") // Redirect to home after login success
    }
  }, [location, isLoggedIn, navigate])

  // Only show Header, Footer, and Home on certain routes
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp")

  return (
    <div>
      {/* Show Navbar only when not on login/signup pages */}
      {!noHeaderFooter && <Navbar />}

      {/* Show Home only when not on login/signup pages */}
      {!noHeaderFooter && <Home />}

      {/* Render the main content (children routes) */}
      <Outlet />

   
      {!noHeaderFooter && <Footer />}
    </div>
  )
}

export default Main
