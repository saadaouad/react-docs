import React, { Component } from "react";
import Products from "./Products";
import products from "../../data/products.json";

class ThinkingInReact extends Component {
  render() {
    return (
      <div className="tc">
        {" "}
        <h2>Thinking in React</h2>
        <Products products={products} />
      </div>
    );
  }
}

export default ThinkingInReact;
