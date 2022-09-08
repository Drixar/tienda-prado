import "./Topbar.css";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topBar">
      <div className="brand">
        <Link to="/">
          <img src="../images/logo32.png" className="brandLogo" alt="Logo" />
        </Link>
        <Link to="/" className="pageTitle" style={{ textDecoration: "none" }}>
          <p className="titleText">Prana</p>
        </Link>
      </div>
      <div className="brand">
        <Link to="/" className="pageTitle" style={{ textDecoration: "none" }}>
          <p className="titleText">Tienda de Té</p>
        </Link>
      </div>
      <div className="cartWidget">
        <CartWidget />
      </div>
    </div>
  );
};

export default Topbar;
