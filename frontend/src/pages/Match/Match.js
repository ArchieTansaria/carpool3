import React, { useEffect, useState } from "react";
import "./Match.css";
import RideMatchCard from "../../components/Matching/Matching";
import Rewards from "../../components/Rewards/Rewards";

export default function Match() {
	const [showRewards, setShowRewards] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowRewards(true);
		}, 5000);
		return () => clearTimeout(timeout); // Clean up the timeout on unmount
	}, []);
	return (
		<div className="components">
			<RideMatchCard />
			{showRewards && <Rewards />}
		</div>
	);
}
