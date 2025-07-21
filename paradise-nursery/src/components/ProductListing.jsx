import React from "react";
import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Group plants by category
  const categories = [...new Set(plants.map((p) => p.category))];

  // Check which plants are in cart (to disable buttons)
  const cartPlantIds = cartItems.map((item) => item.id);

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Plants</h2>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: 30 }}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{ border: "1px solid #ccc", padding: 10, width: 180 }}
                >
                  <img
                    src={plant.thumbnail}
                    alt={plant.name}
                    width="150"
                    height="150"
                  />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={cartPlantIds.includes(plant.id)}
                  >
                    {cartPlantIds.includes(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
