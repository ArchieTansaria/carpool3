import React from "react";
import "./Home.css";
import image from "../../assets/images/hero-land-2.jpg";
// import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
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
				<button
					className="btn primary"
					onClick={() => navigate(`api/users/create`)}
				>
					🚀 Host a ride
				</button>
				<button
					className="btn secondary"
					onClick={() => navigate(`api/users/join`)}
				>
					Join a ride
				</button>
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
