import React, { useState } from "react";
import "./Login.css";
// import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
	// State to store email and password inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent page refresh
		const loginData = { email, password };

		try {
			// Sending data to the backend (replace URL with your actual backend login route)
			const response = await fetch(`api/users/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginData),
			});

			const result = await response.json();

			if (response.status === 200) {
				// Success: handle the login (e.g., save userId or token)
				setMessage(`Login successful! User ID: ${result.userId}`);
				// Optionally store userId or token in localStorage or state
				// localStorage.setItem('userId', result.userId);
			} else if (response.status === 404) {
				// User not found
				setMessage(result.message);
			} else {
				setMessage("Error during login");
			}
		} catch (error) {
			setMessage("Error connecting to the server");
		}
	};

	return (
		<div className="login-container">
			<div className="login-box">
				<h1 className="login-header">logín</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)} // Update email state on change
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
							onChange={(e) => setPassword(e.target.value)} // Update password state on change
							required
						/>
					</div>
					<button
						type="submit"
						className="login-btn"
						onClick={() => navigate("/")} //TODO : Provide check
					>
						Login
					</button>

					<button
						type="button"
						className="new-user-btn"
						onClick={() => navigate("/api/users/register")}
					>
						New user
					</button>
				</form>
				{message && <p>{message}</p>} {/* Display login message */}
			</div>
		</div>
	);
};

export default Login;
