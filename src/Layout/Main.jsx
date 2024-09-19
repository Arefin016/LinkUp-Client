import { Outlet } from "react-router-dom";
// import Footer from "../pages/Shared/Footer/Footer";

import Banner from "../pages/Home/Home/Banner/Banner";
import Navbar from "../components/navbar/Navbar";

import Footer from "../pages/Shared/Footer/Footer";
// import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar /> Keeping the Navbar component from hasib-nav
      {/* <Navbar /> */}
      <Banner></Banner>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
