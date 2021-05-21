import React, { useContext } from "react";
import { TestContext } from "./Main.js";

const Store = () => {
  const stateContext = useContext(TestContext);
  const { setCart, setNumItems, storeItems, setCartTotal } = stateContext;

  const addToCart = (item) => {
    var cartItem = { ...item };
    cartItem.timeAdded = new Date().getTime();
    setCart((cart) => [...cart, cartItem]);
    setNumItems((currNumItems) => currNumItems + 1);
    setCartTotal((currCartTotal) => currCartTotal + cartItem.price);
  };

  return (
    <div>
      <h2>Pick Your Emojies</h2>
      <p>Click on an item to add it to your cart.</p>
      <div className="items">
        {storeItems.map((item) => {
          return (
            <div
              key={item.id}
              className="itemCard"
              onClick={() => addToCart(item)}
            >
              <p className="emoji">{item.emoji}</p>
              <p>{item.name}</p>
              <p>{item.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
