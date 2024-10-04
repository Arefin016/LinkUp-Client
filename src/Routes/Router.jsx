import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import EventHistory from "../pages/Home/EventHistory/EventHistory";
import MyCalender from "../pages/Home/MyCelender/MyCalendar";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import Rating from "../pages/Rateing/Rating";  // Correct the import path here
import Dashboard from "../pages/Dashboard/Dashboard";
import UserDashboard from "../pages/Userashboard/UserDashboard"; // Correct import
import Dash from "../Layout/Dash";
import Guides from "../pages/Guides/Guides";
import Introduction from "../pages/Introduction/Introduction";
import Contact from "../pages/Contact/Contact";
import UseLinkUp from "../pages/UseLinkUp/UseLinkUp";
import Features from "../pages/Features/Features";
import Faqs from "../pages/Faqs/Faqs";
import BestUse from "../pages/BestUse/BestUse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/login", element: <SignIn /> },
      { path: "/contact", element: <ContactUs /> },
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dash />
          </PrivateRoute>
        ),
        children: [
          { path: "/dashboard", element: <Dashboard /> }, // Adjusted path
          { path: "/dashboard/history", element: <EventHistory /> },
          { path: "/dashboard/user", element: <UserDashboard /> },
          { path: "/dashboard/rating", element: <Rating /> }, // Use lowercase
        ],
      },
      {
        path: "/guides",
        element: <Guides />,
        children: [
          { path: "/guides/introduction", element: <Introduction /> },
          { path: "/guides/contact", element: <Contact /> },
          { path: "/guides/useLinkUp", element: <UseLinkUp /> },
          { path: "/guides/features", element: <Features /> },
          { path: "/guides/faqs", element: <Faqs /> }, // Consistent casing
          { path: "/guides/bestuse", element: <BestUse /> },
        ],
      },
    ],
  },
]);
