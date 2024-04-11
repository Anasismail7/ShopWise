import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/NavBar";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Layout = () => {
  return (
    <>
      {/* <PopupPage /> */}
      <Header />
      <Navbar />
      {/* {changes} */}
      <Outlet />
      <ScrollToTopButton />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
