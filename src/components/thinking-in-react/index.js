import React from "react";
import Products from "./Products";
import products from "../../data/products.json";

const ThinkingInReact = props => {
  return (
    <div className="tc">
      {" "}
      <h2>Thinking in React</h2>
      <Products products={products} />
    </div>
  );
};

export default ThinkingInReact;
