import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCatogery }) => {
  return (
    <div className="app explore-menu" id="explore-menu">
      <h1>Our Menu</h1>
      <p className="explore-menu-text">
        Explore from our Menu, we have a great collection of <b>Food & Groceries</b> products in our gallery and many customisation as per your need we can deliver to you. 
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCatogery((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
