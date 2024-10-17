import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/NavBar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div>
     
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
