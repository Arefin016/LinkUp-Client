import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/Home/Home/Home"
import Main from "../Layout/Main"
import EventHistory from "../pages/Home/EventHistory/EventHistory"
import MyCalender from "../pages/Home/MyCelender/MyCalendar"
import PrivateRoute from "./PrivateRoute"
import ContactUs from "../pages/ContactUs/ContactUs"
import Rating from "../pages/Rateing/Rating"
import Dashboard from "../pages/Dashboard/Dashboard"
import UserDashboard from "../pages/Userashboard/UserDashboard"
import Dash from "../Layout/Dash"
import Guides from "../pages/Guides/Guides"
import Introduction from "../pages/Introduction/Introduction"
import Contact from "../pages/Contact/Contact"
import UseLinkUp from "../pages/UseLinkUp/UseLinkUp"
import Features from "../pages/Features/Features"
import Faqs from "../pages/Faqs/Faqs"
import BestUse from "../pages/BestUse/BestUse"

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
      // {
      //   path: "/guides",
      //   element: <Guides></Guides>,
      // },
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
      // Guide page Route
      {
        path: "/guides",
        element: <Guides></Guides>,
        children: [
          {
            path: "/guides/introduction",
            element: <Introduction></Introduction>,
          },
          {
            path: "/guides/contactUs",
            element: <Contact></Contact>,
          },
          {
            path: "/guides/useLinkUp",
            element: <UseLinkUp></UseLinkUp>,
          },
          {
            path: "/guides/features",
            element: <Features></Features>,
          },
          {
            path: "/guides/faqS",
            element: <Faqs></Faqs>,
          },
          {
            path: "/guides/bestUse",
            element: <BestUse></BestUse>,
          },
        ],
      },
    ],
  },
])
