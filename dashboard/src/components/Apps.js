import React from "react";

const Apps = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px", color: "#444" }}>Apps</h2>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        Explore our trading and investment ecosystem.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px" }}>
        {/* Card 1: Varsity */}
        <div style={cardStyle}>
          <h3 style={{ color: "#387ed1", fontSize: "1.2rem" }}>Varsity</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "10px" }}>
            Stock market lessons with in-depth coverage.
          </p>
        </div>

        {/* Card 2: Coin */}
        <div style={cardStyle}>
          <h3 style={{ color: "#387ed1", fontSize: "1.2rem" }}>Coin</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "10px" }}>
            Buy direct mutual funds online, commission-free.
          </p>
        </div>

        {/* Card 3: Kite Connect */}
        <div style={cardStyle}>
          <h3 style={{ color: "#387ed1", fontSize: "1.2rem" }}>Kite Connect</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "10px" }}>
            Build powerful trading platforms with our APIs.
          </p>
        </div>

        {/* Card 4: Streak */}
        <div style={cardStyle}>
          <h3 style={{ color: "#387ed1", fontSize: "1.2rem" }}>Streak</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "10px" }}>
            Algo & strategy platform for traders.
          </p>
        </div>

        {/* Card 5: Sensibull */}
        <div style={cardStyle}>
          <h3 style={{ color: "#387ed1", fontSize: "1.2rem" }}>Sensibull</h3>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "10px" }}>
            Advanced options trading platform.
          </p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "5px",
  padding: "20px",
  width: "220px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  cursor: "pointer",
};

export default Apps;
