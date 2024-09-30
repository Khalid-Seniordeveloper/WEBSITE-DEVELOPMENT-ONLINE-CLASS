import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../screens/About/About";
import Home from "../../screens/Home/Home";
import Contact from "../../screens/contact/Contact";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/footer";

const Routers = () => {
  return (
    <>
      <Nav /> {/* Render Nav here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default Routers;