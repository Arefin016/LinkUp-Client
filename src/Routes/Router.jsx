

import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
// import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
       
      //   path: "/aboutus",
      //   element: <AboutUs></AboutUs>,
      // },
      { path: "/login",
        element: <SignIn></SignIn>,}
      ,
      { path: "/signUp",
        element: <SignUp></SignUp>,}
    ],
  },
]);
