import React from "react";
import { shallow } from "enzyme";
import productsData from "../../../data/products.json";
import ProductsComponent from "../Products.js";

const sportProducts =
  productsData &&
  productsData.filter(product => product.category === "Sporting Goods");
const electronicProducts =
  productsData &&
  productsData.filter(product => product.category === "Electronics");

it("Products component renders without crashing", () => {
  const wrapper = shallow(<ProductsComponent products={productsData} />);
  expect(wrapper.find(".sport-products")).toHaveLength(sportProducts.length);
  expect(wrapper.find(".electronic-products")).toHaveLength(
    electronicProducts.length
  );
});
