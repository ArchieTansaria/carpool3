import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import API_URL from "../../config";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			const response = await axios.post(`${API_URL}/register`, {
				email,
				password,
			});
			setSuccessMessage(response.data.message);
		} catch (err) {
			setError(
				err.response?.data.message || "An error occurred during signup"
			);
		}
	};

	return (
		<div className="signup-container">
			<div className="signup-box">
				<h1 className="signup-header">Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="input-field">
						<label htmlFor="confirm-password">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirm-password"
							name="confirm-password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					{error && <p className="error-message">{error}</p>}
					{successMessage && (
						<p className="success-message">{successMessage}</p>
					)}
					<button type="submit" className="create-btn">
						{" "}
						//TODO navigate to profile route Create Account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
