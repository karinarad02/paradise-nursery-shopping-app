// src/components/ProductList.js
import React, { useState } from "react";
import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Group plants by category
  const categories = [...new Set(plants.map((p) => p.category))];

  const [added, setAdded] = useState({}); // track disabled buttons

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div style={{ padding: "1rem" }}>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={added[plant.id] || cartItems[plant.id]}
                  >
                    {added[plant.id] || cartItems[plant.id]
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
