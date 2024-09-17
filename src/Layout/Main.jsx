import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import Banner from "../pages/Home/Home/Banner/Banner";
import Navbar from "../components/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
