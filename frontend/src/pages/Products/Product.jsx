import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import "./Product.css";

const Product = () => {
  const [category, setCatogery] = useState("All");
  return (
    <div className="product">
      <ExploreMenu category={category} setCatogery={setCatogery} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Product;
