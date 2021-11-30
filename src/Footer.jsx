import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center">
        <p className=" mb-0">
          &copy; {year} Girls hostel. All Rights Reserved | Term and Condition
          Applied
        </p>
      </footer>
    </>
  );
};
export default Footer;
