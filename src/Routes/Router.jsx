import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import History from "../pages/Home/MyCelender/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
           {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path:"/history",
        element: <History></History>,
      }
    ],
  },
]);
