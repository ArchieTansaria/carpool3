import React, { useState } from "react";
import axios from "axios";
import "./DetailsForHost.css";
// import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

const CreateRide = () => {
	const [source, setSource] = useState("");
	const [destination, setDestination] = useState("");
	const [pickupTime, setPickupTime] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");

		// Assuming driver information is available in localStorage/session or context
		const driver = localStorage.getItem("driverEmail");
		if (!driver) {
			setError("Driver information is missing. Please log in first.");
			return;
		}

		try {
			const response = await axios.post(`api/users/create`, {
				driver,
				commuteFrom: source,
				commuteTo: destination,
				pickupTime,
			});

			setSuccessMessage(response.data.message);
		} catch (err) {
			setError(
				err.response.data.error ||
					"An error occurred while creating the ride"
			);
		}
	};

	return (
		<div className="details-container">
			<h1>Enter Ride Details</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="source">Source Point:</label>
					<input
						type="text"
						id="source"
						value={source}
						onChange={(e) => setSource(e.target.value)}
						placeholder="Enter your starting location"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="destination">Destination:</label>
					<input
						type="text"
						id="destination"
						value={destination}
						onChange={(e) => setDestination(e.target.value)}
						placeholder="Enter your destination"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="pickup-time">Pickup Time:</label>
					<input
						type={Date}
						id="pickup-time"
						value={pickupTime}
						onChange={(e) => setPickupTime(e.target.value)}
						required
					/>
				</div>

				<button
					type="submit"
					onClick={() => navigate("/api/users/Match")}
				>
					Submit Ride Details
				</button>
			</form>
			{error && <p className="error-message">{error}</p>}
			{successMessage && (
				<p className="success-message">{successMessage}</p>
			)}
		</div>
	);
};

export default CreateRide;
