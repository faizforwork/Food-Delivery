import React from "react";
import "./KeyFeatures.css";
import { assets } from "../../assets/assets";

const KeyFeatures = () => {
  return (
    <div className="key-features">
      <div className="key-features-header">
        <div className="key-features-content">
          <h2>Premium Features</h2>
          <p>Let's Get to know what we do</p>
        </div>
        <div className="key-features-boxes">
          <div className="box">
            <img src={assets.restaurant} alt="" />
            <h3>Quality</h3>
            <p>
              We deal in all type of <b>Riding Equipments</b> with premium quality materials.
            </p>
          </div>
          <div className="box">
            <img src={assets.fresh} alt="" />
            <h3>Fresh</h3>
            <p>
              Premium quality & fresh leather saddle with customisation as per client.
            </p>
          </div>
          <div className="box">
            <img src={assets.delivery} alt="" />
            <h3>Fast Delivery</h3>
            <p>
              We mostly make our product <b>Handmade</b> for more defination to our product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
