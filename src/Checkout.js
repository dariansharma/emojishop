import React, { useContext } from "react";
import { TestContext } from "./Main";
import ThankYou from "./ThankYou";
import PaymentInfo from "./PaymentInfo";

const Checkout = () => {
  const { numItems } = useContext(TestContext);
  return <div>{numItems > 0 ? <PaymentInfo /> : <ThankYou />}</div>;
};

export default Checkout;
