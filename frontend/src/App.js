import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProfileSetup from "./pages/Profile/Profile";
import CreateRide from "./pages/DetailsForHost/DetailsForHost";
import Match from "./pages/Match/Match";

export default function App() {
	return (
		<Router>
			<Navbar /> {/* Always show the Navbar */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="api/users/login" element={<Login />} />
				<Route path="api/users/register" element={<Signup />} />
				<Route path="api/users/profile" element={<ProfileSetup />} />
				<Route path="api/users/create" element={<CreateRide />} />
			</Routes>
			<Match />
		</Router>
	);
}
