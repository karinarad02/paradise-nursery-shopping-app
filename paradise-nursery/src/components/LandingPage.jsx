import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "1px 1px 2px black",
      }}
    >
      <h1>Paradise Nursery</h1>
      <p>
        Your one-stop shop for beautiful house plants that brighten your home.
      </p>
      <button
        onClick={handleGetStarted}
        style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
