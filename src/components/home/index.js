import React from "react";
import Header from "../header/index.js";
import Menu from '../menu/index.js';
import HappyHacking from "../happy-hacking/index.js";

const Home = (
  {
    children,
  },
) => { 
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Menu />
        <div className="w-80-ns">
          <div>{children}</div>
          <div className="fixed bottom-0 right-0 ph3">
            <HappyHacking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
