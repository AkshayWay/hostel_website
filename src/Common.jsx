import "./App.css";
import React from "react";

import homeImage from "../src/Images/hostel_page.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-design">Kapoor's home</strong>
                  </h1>
                  <h2 className="my-3">
                    We welcome hardworking and bright student to live with us
                  </h2>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
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

export default Common;
