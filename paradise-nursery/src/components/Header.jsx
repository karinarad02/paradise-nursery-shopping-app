import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        background: "#4CAF50",
        color: "white",
      }}
    >
      <h1>Paradise Nursery</h1>
      <nav>
        <Link
          to="/"
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            position: "relative",
          }}
        >
          Cart 🛒
          {totalQuantity > 0 && (
            <span
              style={{
                position: "absolute",
                top: -8,
                right: -10,
                background: "red",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
