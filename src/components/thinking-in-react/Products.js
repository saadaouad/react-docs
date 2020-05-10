import PropTypes from "prop-types";
import React from "react";

const Products = ({ products }) => {
  const sportProducts =
    products &&
    products.filter(product => product.category === "Sporting Goods");
  const electronicProducts =
    products && products.filter(product => product.category === "Electronics");
  return (
    <table>
      <thead>
        <tr>
          <th className="fw6 pv2 tl">Name</th>
          <th className="fw6 pv2 tl">Price</th>
          <th className="fw6 pv2 tl">Stocked</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="black-80 pv1">{sportProducts[0].category}</th>
        </tr>
        {sportProducts.map((product, index) => (
          <tr key={index} className="sport-products">
            <td className="black-70 ph1">{product.name}</td>
            <td className="black-70 ph1">{product.price}</td>
            <td className="black-70 ph1">{product.stocked.toString()}</td>
          </tr>
        ))}
        <tr>
          <th className="black-80 pv1">{electronicProducts[0].category}</th>
        </tr>
        {electronicProducts.map((product, index) => (
          <tr key={index} className="electronic-products">
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
