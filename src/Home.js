import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="content-header">
      <h2>Hello</h2>
      <p>Welcome to the emoji store. Pick out your favorite emojies!</p>
      <NavLink to="/store">Go to Store</NavLink>
    </div>
  );
};

export default Home;
