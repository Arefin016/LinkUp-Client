import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/Home/Home/Home"
import Main from "../Layout/Main"
import Dash from "../Layout/Dash"
import EventHistory from "../pages/Home/EventHistory/EventHistory"
import MyCalender from "../pages/Home/MyCelender/MyCalendar"
import Testimonials from "../pages/Testimonials/Testimonials"
import PrivateRoute from "./PrivateRoute"
import ContactUs from "../pages/ContactUs/ContactUs"
import Rating from "../pages/Rateing/Rating"
import Dashboard from "../pages/Dashboard/Dashboard"
import UserDashboard from "../pages/Userashboard/UserDashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
     
      {
        path: "/Rating",
        element: <Rating />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/testimonials",
        element: (
          <PrivateRoute>
            <Testimonials></Testimonials>
          </PrivateRoute>
        ),
      },
      {
        path: "/celender",
        element: (
          <PrivateRoute>
            <MyCalender></MyCalender>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dash></Dash>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/dashboards",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/history",
            element: <EventHistory></EventHistory>,
          },

          {
            path: "/dashboard/user",
            element: <UserDashboard></UserDashboard>,
          },
        ],
      },
    ],
  },
])