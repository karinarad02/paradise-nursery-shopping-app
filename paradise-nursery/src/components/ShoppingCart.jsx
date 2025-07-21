import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total Items: {cart.totalQuantity}</h3>
          <h3>Total Cost: ${cart.totalCost.toFixed(2)}</h3>

          <button onClick={handleCheckout} style={{ marginRight: 10 }}>
            Checkout
          </button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
