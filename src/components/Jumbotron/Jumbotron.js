//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Nerdy Clicky Game</h1>
		<h2>Click on any image to gain a point, but if you click on the same image twice, you lose. Collect all 12 nerds to win.</h2>
	</header>
);
export default Jumbotron;