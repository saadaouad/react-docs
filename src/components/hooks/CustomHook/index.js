import React from "react";
import SearchParams from "./SearchParams";

const CustomHook = () => {
  return (
    <div className="pa4">
      <h2 className="tl" data-cy="title">
        Custom Hook
      </h2>
      <p className="tl">
        Constructing a component to allow a user to search by a specific
        location:
      </p>
      <div>
        <SearchParams />
      </div>
    </div>
  );
};

export default CustomHook;
