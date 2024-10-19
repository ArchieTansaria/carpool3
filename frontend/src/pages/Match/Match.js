import React, { useState } from "react";
import axios from "axios";
import "./Match.css";
// import API_URL from "../../config";

const Match = ({
	rideId,
	passengerId,
	name,
	company,
	matchPercentage,
	days,
	carAvailability,
}) => {
	const [joinStatus, setJoinStatus] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleJoinRide = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post(`api/users/join`, {
				passengerId,
				rideId,
			});
			setJoinStatus(response.data.message);
		} catch (error) {
			setJoinStatus(error.response?.data?.error || "");
		}
		setIsLoading(false);
	};

	return (
		<div className="ride-card">
			<div className="ride-info">
				<div className="details">
					<h3>{name}</h3>
					<p>{company}</p>
					<p>{matchPercentage}% Match</p>
					<p>{days.join(" ")}</p>
					<p>
						{carAvailability ? "Car available" : "No car available"}
					</p>
				</div>
			</div>
			<div className="ride-actions">
				{joinStatus ? (
					<p>{joinStatus}</p>
				) : (
					<button onClick={handleJoinRide} disabled={isLoading}>
						{isLoading ? "Joining..." : "Join Ride"}
					</button>
				)}
			</div>
		</div>
	);
};

export default Match;
