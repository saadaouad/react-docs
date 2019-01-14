import React from "react";

const ListItems = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, index) => (
    <li key={index} className="list-items pv1">
      {number}
    </li>
  ));
  return <div className="w-10 center">{listItems}</div>;
};

export default ListItems;
