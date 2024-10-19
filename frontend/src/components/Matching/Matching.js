import React from "react";
import "./Matching.css";

const RideMatchCard = () => {
	const users = [
		{
			name: "Ramon Kallensee II",
			company: "Sterling Cooper",
			matchPercentage: 84,
			days: ["Mo", "Tu", "We", "Th", "Fr"],
			carAvailable: false,
		},
		{
			name: "Sarah Conner",
			company: "Cyberdyne Systems",
			matchPercentage: 91,
			days: ["Mo", "We", "Fr"],
			carAvailable: true,
		},
		{
			name: "John Doe",
			company: "Tech Solutions",
			matchPercentage: 76,
			days: ["Tu", "Th", "Sa"],
			carAvailable: false,
		},
		{
			name: "Jane Smith",
			company: "Initech",
			matchPercentage: 88,
			days: ["Mo", "Tu", "We", "Th"],
			carAvailable: true,
		},
		{
			name: "Alex Johnson",
			company: "Globex Corporation",
			matchPercentage: 93,
			days: ["Mo", "Tu", "We", "Th", "Fr"],
			carAvailable: true,
		},
	];

	return (
		<div className="ride-match-list">
			{users.map((user, index) => (
				<div className="ride-match-card" key={index}>
					<div className="ride-header">
						<img
							className="profile-pic"
							src="https://via.placeholder.com/50"
							alt="Profile"
						/>
						<div className="ride-details">
							<h3>{user.name}</h3>
							<p>{user.company}</p>
						</div>
					</div>

					<div className="ride-match-info">
						<p className="match-percentage">
							{user.matchPercentage}% MATCH
						</p>
						<p>{user.days.join(" ")}</p>
						<p>
							{user.carAvailable
								? "Car available"
								: "No car available"}
						</p>
						<p className="more-info">More...</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RideMatchCard;
