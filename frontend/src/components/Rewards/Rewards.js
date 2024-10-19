import React from "react";

const CarbonFootprintSavings = () => {
	return (
		<div className="container">
			<main>
				<div className="card">
					<h2>Your Carbon Footprint Savings</h2>
					<p className="highlight">Total CO2 Saved:</p>
					<div className="value">1.5 Tons</div>

					<div className="stats">
						<p>
							<span className="label">Trips Taken:</span> 50
						</p>
						<p>
							<span className="label">Distance Covered:</span>{" "}
							2,000 miles
						</p>
					</div>
				</div>

				<div className="card rewards">
					<h2>Carpooling Rewards</h2>
					<p className="highlight">Total RideCoins Earned:</p>
					<div className="value">750 RideCoins</div>
				</div>
			</main>

			<footer>
				<p>&copy; 2024 Carpool Network. Let's drive change!</p>
			</footer>
		</div>
	);
};

export default CarbonFootprintSavings;
