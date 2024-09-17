import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"
import Banner from "../pages/Home/Home/Banner/Banner"
import AboutUs from "../pages/AboutUs/AboutUs"

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Outlet></Outlet>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  )
}

export default Main
