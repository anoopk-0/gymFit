import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
        <div className="logo-f">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
