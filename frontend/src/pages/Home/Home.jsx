import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from '../../components/AppDownload/AppDownload'
import About from "../about/About";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Product />
      <KeyFeatures />
      <About />
      <AppDownload />
    </div>
  );
};

export default Home;
