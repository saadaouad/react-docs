import React, { useState } from "react";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const CustomHook = () => {
  const themeHook = useState("yellow");
  return (
    <ThemeContext.Provider value={themeHook}>
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
    </ThemeContext.Provider>
  );
};

export default CustomHook;
