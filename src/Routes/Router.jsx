import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/Home/Home/Home"
import Main from "../Layout/Main"

import MyCalender from "../pages/Home/MyCelender/MyCalendar"
import PrivateRoute from "./PrivateRoute"
import ContactUs from "../pages/ContactUs/ContactUs"
import Rating from "../pages/Rateing/Rating" // Correct the import path here
// import Dashboard from "../pages/Dashboard/Dashboard"
import UserDashboard from "../pages/Userashboard/UserDashboard" // Correct import
import Dash from "../Layout/Dash"
import Guides from "../pages/Guides/Guides"
import Introduction from "../pages/Introduction/Introduction"

import UseLinkUp from "../pages/UseLinkUp/UseLinkUp"
import Features from "../pages/Features/Features"
import Faqs from "../pages/Faqs/Faqs"
import BestUse from "../pages/BestUse/BestUse"
import Contact from "./../pages/Contact/Contact"
import AllUsers from "../pages/AdminPages/AllUsers/AllUsers"
import ManageBooking from "../pages/AdminPages/ManageBooking/ManageBooking"
import AdminRoute from "./AdminRoute"
import AdminDashboard from "../pages/AdminPages/AdminDashboard/AdminDashboard"
import AdminHome from "../pages/AdminPages/AdminHome/AdminHome"

import NotePad from "../pages/AdminPages/AdminHome/NotePad/NotePad"
import EventHistory from "../pages/EventHistory/EventHistory"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/login", element: <SignIn /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/rating", element: <Rating /> }, // Use lowercase for consistency
      { path: "/signup", element: <SignUp /> },
      {
        path: "/calendar",
        element: (
          <PrivateRoute>
            <MyCalender />
          </PrivateRoute>
        ),
      },

      {
        path: "/guides",
        element: <Guides />,
        children: [
          { path: "/guides/introduction", element: <Introduction /> },
          { path: "/guides/contact", element: <Contact></Contact> },
          { path: "/guides/useLinkUp", element: <UseLinkUp /> },
          { path: "/guides/features", element: <Features /> },
          { path: "/guides/faqs", element: <Faqs /> }, // Consistent casing
          { path: "/guides/bestuse", element: <BestUse /> },
        ],
      },
    ],
  },
  // This is the dashboard Route
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dash />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard/userDashboard", element: <UserDashboard /> },
      { path: "/dashboard/eventHistoryDetails", element: <EventHistory /> },

      { path: "/dashboard/rating", element: <Rating /> }, // Use lowercase
      // admin routes
      {
        path: "/dashboard/adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageBooking",
        element: (
          <AdminRoute>
            <ManageBooking></ManageBooking>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/notePad",
        element: <NotePad></NotePad>,
      },
    ],
  },
])
