import React from "react";
import "./Home.css";
import image from "../../assets/images/hero-land-2.jpg";

export default function Home() {
	return (
		<section className="hero">
			<div className="text-content">
				<h1>Easy Corporate Commutes</h1>
				<p>
					Streamline ride-sharing, save on travel costs, and
					contribute to a greener planet.
				</p>
			</div>
			<div className="buttons">
				<button className="btn primary">🚀 Host a ride</button>
				<button className="btn secondary">Join a ride</button>
			</div>
			<div className="image-content">
				<img
					src={image}
					alt="Phone with UI"
					className="phone-image"
					style={{ borderRadius: "15px" }}
				/>
			</div>
		</section>
	);
}
