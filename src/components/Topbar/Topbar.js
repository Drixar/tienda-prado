import "./Topbar.css";
import React from "react";
import CartWidget  from "../CartWidget/CartWidget";

const Topbar = () => {
  return (
    <div className="topBar">
      <div className="brand">
        <img src="images/logo32.png" className="brandLogo" alt="Logo" />
        <p className="brandText">Prana</p>
      </div>
      <div className="pageTitle">
        <p className="titleText">Tienda de Té</p>
      </div>
      <div className="cartWidget">
        <CartWidget />
      </div>
    </div>
  );
};

export default Topbar;
