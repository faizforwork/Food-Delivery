import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <h1>Food for food lovers<span>Fresh</span> & Groceries</h1>
      </div>
      <div className="about-section">
        <div className="about-section-image"></div>
        <div className="about-section-data">
          <p>Handmade</p>
          <h3>Desserts</h3>
          <p>makes delicious by every tip of the spoon</p>
          <p>WELCOME TO INSIGHT EXPLORE MORE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
