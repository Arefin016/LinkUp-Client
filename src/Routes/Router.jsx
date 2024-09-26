import { createBrowserRouter } from "react-router-dom"
<<<<<<< HEAD
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
// import AboutUs from "../pages/AboutUs/AboutUs"
=======
import AboutUs from "../pages/AboutUs/AboutUs"
>>>>>>> 0743d7578e78e449b8d14cc5a0c50620b295f31c
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/Home/Home/Home"
import Main from "../Layout/Main"
import EventHistory from "../pages/Home/EventHistory/EventHistory"
import Testimonials from "../pages/Testimonials/Testimonials"
import PrivateRoute from "./PrivateRoute"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
<<<<<<< HEAD
      // {
       
      //   path: "/aboutus",
      //   element: <AboutUs></AboutUs>,
      // },
      { path: "/login",
        element: <SignIn></SignIn>,}
      ,
      { path: "/signUp",
        element: <SignUp></SignUp>,}
=======
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
        path: "/history",
        element: <EventHistory></EventHistory> ,
      },
      {
        path: "/testimonials",
        element: (
          <PrivateRoute>
            <Testimonials></Testimonials>
          </PrivateRoute>
        ),
      },
>>>>>>> 0743d7578e78e449b8d14cc5a0c50620b295f31c
    ],
  },
])
