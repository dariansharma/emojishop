import React, { useContext } from "react";
import { TestContext } from "./Main";

const PaymentInfo = () => {
  const { setCart, setNumItems, setCartTotal } = useContext(TestContext);

  const payForOrder = () => {
    //clear cart
    setCart((cart) => []);
    setNumItems((numItems) => 0);
    setCartTotal((total) => 0);
  };

  return (
    <>
      <div className="content-header">
        <h2>Enter Payment Details</h2>
      </div>
      <form onSubmit={payForOrder}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName"></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName"></input>
        <label htmlFor="streetAddress">Street Address</label>
        <input type="text" id="streetAddress"></input>
        <label htmlFor="creditCard">Credit Card Number</label>
        <input type="number" id="creditCard"></input>
        <br></br>
        <button className="button" type="submit" id="submitPayment">
          <h2>Pay For Order</h2>
        </button>
      </form>
    </>
  );
};

export default PaymentInfo;
