import "./App.css";
import React from "react";

import homeImage from "../src/Images/hostel_page.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name=" Best place to live.."
        imgSrc={homeImage}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
