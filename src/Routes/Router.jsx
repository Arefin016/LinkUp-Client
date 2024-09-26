import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/Home/Home/Home"
import Main from "../Layout/Main"
import EventHistory from "../pages/Home/EventHistory/EventHistory"
import MyCalender from "../pages/Home/MyCelender/MyCalendar"
import Testimonials from "../pages/Testimonials/Testimonials"
import PrivateRoute from "./PrivateRoute"
import ContactUs from "../pages/ContactUs/ContactUs"
import Dashboard from "../pages/Dashboard/Dashboard"

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
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/history",
        element: <EventHistory></EventHistory>,
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
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
])
