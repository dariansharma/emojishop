import React from "react";
import { NavLink } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="content-header">
      <NavLink exact to="/">
        Thank you, return to Home
      </NavLink>
    </div>
  );
};

export default ThankYou;
