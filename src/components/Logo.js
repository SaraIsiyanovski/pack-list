import React from "react";
import logo from "../img/logo.jpg";

export const Logo = () => {
  return (
    <div className="logo">
      <span></span>
      <h2>PACK THIS</h2>
      <div className="right">
        <img className="image" src={logo} />
      </div>
    </div>
  );
};
