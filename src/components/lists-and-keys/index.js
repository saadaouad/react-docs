import React from "react";

const ListItems = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, index) => (
    <li key={index} className="list-items pv1">
      {number}
    </li>
  ));
  return (
    <div className="tc">
      <h2>Lists and keys</h2>
      <div className="tl pa3">{listItems}</div>
    </div>
  );
};

export default ListItems;
