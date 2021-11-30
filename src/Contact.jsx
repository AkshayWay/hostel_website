import "./App.css";
import React from "react";
import ContactImg from "../src/Images/contact_page.svg";

const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-design">Mr. Kapoor</strong>
                  </h1>
                  <h2 className="my-3">Mob No. 7506460632</h2>
                  <div className="mt-3">
                    <h1>
                      <strong className="brand-design">Address</strong>
                    </h1>
                    <h2 className="my-3">
                      <address>
                        103, Royal Valendicia, Dombivali East(416602)
                      </address>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={ContactImg}
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

export default Contact;
