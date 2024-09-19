import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"

const Main = () => {
  const location = useLocation()
  // console.log(location)

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp")

  return (
    <div>
      {/* {noHeaderFooter || <NavBar></NavBar>}{" "} */}
      {/* Keeping the Navbar component from hasib-nav */}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main
