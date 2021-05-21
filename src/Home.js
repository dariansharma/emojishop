import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TestContext } from "./Main";

const Home = () => {
  const { cart, setCart } = useContext(TestContext);
  console.log(cart, setCart);
  return (
    <div>
      <h2>Hello</h2>
      <p>Welcome to the emoji store. Pick out your favorite emojies!</p>
      <NavLink to="/store">Go to Store</NavLink>
    </div>
  );
};

export default Home;