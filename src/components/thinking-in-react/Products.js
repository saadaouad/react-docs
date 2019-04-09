import React from "react";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  const sportProducts =
    products &&
    products.filter(product => product.category === "Sporting Goods");
  const electronicProducts =
    products && products.filter(product => product.category === "Electronics");
  return (
    <table className="center tl">
      <thead>
        <tr>
          <th className="fw6 pv2 ph1">Name</th>
          <th className="fw6 pv2 ph1">Price</th>
          <th className="fw6 pv2 ph1">Stocked</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="black fw5 pv1">{sportProducts[0].category}</th>
        </tr>
        {sportProducts.map((product, index) => (
          <tr key={index}>
            <td className="black-70 ph1">{product.name}</td>
            <td className="black-70 ph1">{product.price}</td>
            <td className="black-70 ph1">{product.stocked.toString()}</td>
          </tr>
        ))}
        <tr>
          <th className="black fw5 pv1">{electronicProducts[0].category}</th>
        </tr>
        {electronicProducts.map((product, index) => (
          <tr key={index}>
            <td className="black-70 ph1">{product.name}</td>
            <td className="black-70 ph1">{product.price}</td>
            <td className="black-70 ph1">{product.stocked.toString()}</td>
          </tr>
        ))}
      </tbody>
      <tbody />
    </table>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
