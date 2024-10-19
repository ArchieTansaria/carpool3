import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";
// import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [designation, setDesignation] = useState("");
	const [commuteFrom, setCommuteFrom] = useState("");
	const [commuteTo, setCommuteTo] = useState("");
	const [pickupTime, setPickupTime] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");

		try {
			const response = await axios.put(`api/users/profile`, {
				email,
				name,
				designation,
				commuteFrom,
				commuteTo,
				pickupTime,
			});

			setSuccessMessage(response.data.message);
		} catch (err) {
			setError(
				err.response.data.error ||
					"An error occurred while updating the profile"
			);
		}
	};

	return (
		<div className="container">
			<h1>Profile Setup</h1>
			<form onSubmit={handleSubmit} id="profile-form">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your E-mail"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="designation">Designation</label>
					<input
						type="text"
						id="designation"
						value={designation}
						onChange={(e) => setDesignation(e.target.value)}
						placeholder="Enter your designation"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="commuteFrom">Commute From</label>
					<input
						type="text"
						id="commuteFrom"
						value={commuteFrom}
						onChange={(e) => setCommuteFrom(e.target.value)}
						placeholder="Enter location"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="commuteTo">Commute To</label>
					<input
						type="text"
						id="commuteTo"
						value={commuteTo}
						onChange={(e) => setCommuteTo(e.target.value)}
						placeholder="Enter location"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pickupTime">Pickup Time</label>
					<input
						type={Date}
						id="pickupTime"
						value={pickupTime}
						onChange={(e) => setPickupTime(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="submit-btn"
					onClick={() => navigate("/api/users/profile")}
				>
					Submit
				</button>
			</form>
			{error && <p className="error-message">{error}</p>}
			{successMessage && (
				<p className="success-message">{successMessage}</p>
			)}
		</div>
	);
};

export default ProfileSetup;
