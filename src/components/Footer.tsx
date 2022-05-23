import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;