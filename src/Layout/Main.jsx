<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import Banner from "../pages/Home/Home/Banner/Banner";
import Navbar from "../components/navbar/Navbar";
=======
import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"


>>>>>>> c202035e81acdba4686781e85c0a8953f2fe7e99

const Main = () => {
  return (
    <div>
<<<<<<< HEAD
      <Navbar /> {/* Keeping the Navbar component from hasib-nav */}
      <Banner></Banner>
=======
      <NavBar></NavBar>
      
>>>>>>> c202035e81acdba4686781e85c0a8953f2fe7e99
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
