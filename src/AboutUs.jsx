import "./App.css";
import React from "react";

import AboutImage from "../src/Images/girls_hostel.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgSrc={AboutImage}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
