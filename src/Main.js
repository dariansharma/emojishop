import React, { useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Cart from "./Cart";
import Checkout from "./Checkout";
import emojis from "./emojis";

export const TestContext = React.createContext(null);

const Main = () => {
  let storeItems = emojis;
  const [cart, setCart] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const state = {
    cart: cart,
    setCart: setCart,
    numItems: numItems,
    setNumItems: setNumItems,
    storeItems: storeItems,
    cartTotal: cartTotal,
    setCartTotal: setCartTotal,
  };

  return (
    <TestContext.Provider value={state}>
      <HashRouter>
        <div className="app-container">
          <header>
            <h1>Emoji Store</h1>
            <ul className="header-nav">
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/store" activeClassName="selected">
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" activeClassName="selected">
                  Cart {numItems > 0 ? numItems : " "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkout" activeClassName="selected">
                  Checkout
                </NavLink>
              </li>
            </ul>
          </header>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </div>
      </HashRouter>
    </TestContext.Provider>
  );
};

export default Main;
