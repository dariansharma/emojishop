import React, { useContext } from "react";
import { TestContext } from "./Main";

const Cart = () => {
  const { cart, setCart, numItems, setNumItems, cartTotal, setCartTotal } =
    useContext(TestContext);

  const removeItem = (item) => {
    setCart((cart) =>
      cart.filter((cartItem) => cartItem.timeAdded !== item.timeAdded)
    );
    setNumItems((numItems) => numItems - 1);
    setCartTotal((currCartTotal) => {
      if (numItems === 1) {
        return 0;
      }
      return currCartTotal - item.price;
    });
  };

  const clearCart = () => {
    setCart((cart) => []);
    setNumItems((numItems) => 0);
    setCartTotal((cartTotal) => 0);
  };

  return (
    <>
      <div className="content-header">
        <h2>Your Cart</h2>
        {numItems > 0 ? (
          <p>Click on an item to remove it.</p>
        ) : (
          <p>Go add some items!</p>
        )}
      </div>
      <div className="items">
        {cart.map((cartItem) => {
          return (
            <div
              key={cartItem.timeAdded}
              className="itemCard"
              onClick={() => removeItem(cartItem)}
            >
              <p className="emoji">{cartItem.emoji}</p>
              <p>${cartItem.price}</p>
            </div>
          );
        })}
      </div>
      {numItems > 0 && (
        <div className="content-footer">
          <button className="button" onClick={() => clearCart()}>
            <h2>Clear Cart</h2>
          </button>
          <br></br>
          <h2>Total: {cartTotal.toFixed(2)}</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
