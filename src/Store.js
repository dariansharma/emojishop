import React, { useContext } from "react";
import { TestContext } from "./Main.js";

const Store = () => {
  const stateContext = useContext(TestContext);
  const { setCart, setNumItems, storeItems, setCartTotal } = stateContext;

  const addToCart = (itm) => {
    setCart((cart) => {
      if (isItemIncart(cart, itm)) {
        return cart.map((cartItem) => {
          if (cartItem.item.id === itm.id) {
            cartItem = { ...cartItem, count: cartItem.count + 1 };
          }
          return cartItem;
        });
      } else {
        return [...cart, { item: itm, count: 1 }];
      }
    });
    setNumItems((numItems) => numItems + 1);
    setCartTotal((cartTotal) => cartTotal + itm.price);
  };

  const isItemIncart = (array, itm) => {
    array = array.filter((element) => element.item.id === itm.id);
    if (array.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className="content-header">
        <h2>Pick Your Emojies</h2>
        <p>Click on an item to add it to your cart.</p>
      </div>
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
