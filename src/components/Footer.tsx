import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  );
};

export default Footer;