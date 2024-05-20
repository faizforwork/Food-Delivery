import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */}
          <h1>Insight.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt quas qui blanditiis autem libero iure, assumenda laboriosam eius ipsa omnis expedita, itaque sint eveniet error perferendis accusantium dolorem eaque!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8299547502</li>
                <li>faizahmad86k@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyrights 2024 c All Right Reserved.</p>
    </div>
  );
};

export default Footer;
