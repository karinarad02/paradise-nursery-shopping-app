import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Paradise Nursery
      </h1>
      <p
        style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}
      >
        Welcome to Paradise Nursery – your one-stop shop for vibrant,
        hand-picked houseplants that bring life to every corner of your home.
      </p>
      <Link to="/products">
        <button
          style={{
            fontSize: "1.2rem",
            padding: "12px 24px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
