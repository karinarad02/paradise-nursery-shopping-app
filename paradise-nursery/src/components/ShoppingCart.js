// src/components/ShoppingCart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = Object.values(items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalCost = Object.values(items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (totalItems === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shopping Cart</h2>
      <p>Total plants: {totalItems}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>

      {Object.values(items).map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              marginRight: "1rem",
            }}
          />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <button onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products">
        <button style={{ marginLeft: "1rem" }}>Continue Shopping</button>
      </Link>
    </div>
  );
}
