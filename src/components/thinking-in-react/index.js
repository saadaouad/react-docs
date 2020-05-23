import React from "react";

import products from "../../data/products.json";
import Products from "./Products";

const ThinkingInReact = props => {
  return (
    <div className="pa4">
      <h2>Thinking in React</h2>
      <Products products={products} />
    </div>
  );
};

export default ThinkingInReact;
