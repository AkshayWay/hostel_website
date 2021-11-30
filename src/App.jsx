import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
