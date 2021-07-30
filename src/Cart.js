import React, { useContext } from "react";
import { TestContext } from "./Main";

const Cart = () => {
  const { cart, setCart, numItems, setNumItems, cartTotal, setCartTotal } =
    useContext(TestContext);

  const removeItem = (item) => {
    setCart((cart) =>
      cart.filter((cartItem) => {
        return cartItem.item.id !== item.item.id;
      })
    );
    setNumItems((numItems) => numItems - 1);
    setCartTotal((cartTotal) => {
      if (numItems === 1) {
        return 0;
      }
      return cartTotal - item.item.price;
    });
  };

  const increaseItem = (item) => {
    setCart((cart) =>
      cart.map((cartItem) => {
        if (cartItem.item.id === item.item.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        } else {
          return cartItem;
        }
      })
    );
    setNumItems((numItems) => numItems + 1);
    setCartTotal((currCartTotal) => currCartTotal + item.item.price);
  };

  const decreaseItem = (item) => {
    if (item.count > 1) {
      setCart((cart) =>
        cart.map((cartItem) => {
          if (cartItem.item.id === item.item.id) {
            return { ...cartItem, count: cartItem.count - 1 };
          } else {
            return cartItem;
          }
        })
      );
      setNumItems((numItems) => numItems - 1);
      setCartTotal((currCartTotal) => currCartTotal - item.item.price);
    } else {
      removeItem(item);
    }
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
      <div className="cart-items">
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.timeAdded} className="itemCard-cart">
              <p className="emoji">{cartItem.item.emoji}</p>
              <p>${cartItem.item.price * cartItem.count}</p>
              <button
                className="button-cart"
                onClick={() => decreaseItem(cartItem)}
              >
                -
              </button>
              <p>{cartItem.count}</p>
              <button
                className="button-cart"
                onClick={() => increaseItem(cartItem)}
              >
                +
              </button>
              <button
                className="button-cart"
                onClick={() => removeItem(cartItem)}
              >
                X
              </button>
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
