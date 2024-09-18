import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../components/navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar /> {/* Keeping the Navbar component from hasib-nav */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
