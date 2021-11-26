import "./App.css";
import React from "react";

import homeImage from "../src/Images/hostel_page.svg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Best place to live..
                    <strong className="brand-design">Kapoor's home</strong>
                  </h1>
                  <h2 className="my-3">
                    We welcome hardworking and bright student to live with us
                  </h2>
                  <div className="mt-3">
                    <a href="#" className="btn btn-outline-primary">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={homeImage}
                    className="img-fluid animated"
                    alt="Home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
