import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
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
				<button className="log-in">Log in</button>
				<button className="sign-up">Sign up</button>
			</div>
		</div>
	);
}
