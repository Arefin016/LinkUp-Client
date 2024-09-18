import { createBrowserRouter } from "react-router-dom"
import Main from "./Layout/Main"
import Home from "./pages/Home/Home/Home"
import SignUp from "./pages/SignUp/SignUp"
import UserDashboard from "./pages/Userashboard/UserDashboard"

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
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
     
    ],
  },
])
