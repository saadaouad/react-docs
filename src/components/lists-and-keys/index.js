import React from "react";

const ListItems = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, index) => (
    <li data-cy="list-items" key={index} className="list-items pv1">
      {number}
    </li>
  ));
  return (
    <div className="pa4">
      <h2 data-cy="title">Lists and keys</h2>
      <div>{listItems}</div>
    </div>
  );
};

export default ListItems;
