import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

export default function App() {
	return (
		<div>
			<Navbar />;
			<Home />;
		</div>
	);
}
