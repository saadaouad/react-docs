import React from 'react';

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map(number => (
    <li key={number} className="pv1">{number}
</li>
));

const ListItems = () => {
  return <div className="w-10 center">{listItems}</div>;
};

export default ListItems;
