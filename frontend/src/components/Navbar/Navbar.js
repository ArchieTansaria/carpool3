import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate(); // Create a navigation function

	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="RideMitra Logo" className="logo-img" />
				<span className="brand-name">Rideमित्र</span>
			</div>
			<div className="nav-links">
				<a href="#contact" className="contact">
					Contact
				</a>
				<button className="log-in" onClick={() => navigate("/login")}>
					Log in
				</button>
				<button
					className="sign-up"
					onClick={() => navigate("/register")}
				>
					Sign up
				</button>
			</div>
		</div>
	);
}
