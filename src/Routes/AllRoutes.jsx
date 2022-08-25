





import { Route, Routes } from "react-router-dom";
import React from "react";
// import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
// import LoginPage from "./LoginPage";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/services" element={<ServicePage/>} /> */}
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;