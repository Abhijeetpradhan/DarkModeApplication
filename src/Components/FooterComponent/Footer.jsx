import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="containerFooter">
        <div className="columns-unstyled">
          <h2>James Consulting</h2>
          <h4>500 Terry Francine Street,</h4>
          <h4>San Francisco, CA 94158</h4>
          <h4>Mail: info@mysite.com</h4>
          <h4>Tel: 123-456-7890</h4>
        </div>
        <div className="columns-unstyled">
          <h2>Menu</h2>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Plans and Pricing</li>
            <li>Tools and Tips</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="columns-unstyled">
          <h2>Socials</h2>
          <ul>
            <li>FB</li>
            <li>Insta</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="last-footer">
        &copy;{new Date().getFullYear()} by JAMES CONSULTING
        Powered and Secured by Wix
      </div>
    </div>
  );
};

export default Footer;