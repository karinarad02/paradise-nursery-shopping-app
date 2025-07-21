// src/components/Header.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#4CAF50",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Paradise Nursery
        </Link>
      </h1>
      <nav>
        <Link to="/products" style={{ color: "white", marginRight: "20px" }}>
          Products
        </Link>
        <Link to="/cart" style={{ color: "white", position: "relative" }}>
          Cart
          <span
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              padding: "0 7px",
              position: "absolute",
              top: "-10px",
              right: "-15px",
              fontSize: "0.8rem",
            }}
          >
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}
