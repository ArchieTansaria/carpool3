import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="text-content">
        <h1>Easy Corporate Commutes</h1>
        <p>
          Streamline ride-sharing, save on travel costs,
		and contribute to a greener planet.
        </p>
        <div className="buttons">
          <button className="btn primary">
            🚀 Host a ride
          </button>
          <button className="btn secondary">
            Join a ride
          </button>
        </div>
      </div>
    </section>
  );
}
