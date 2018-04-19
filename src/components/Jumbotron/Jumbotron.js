//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className="header px-3 py-3 d-flex justify-content-center">
		<div>
			<ul className="col-lg-12"><h2>How to Play</h2>
				<li>Click on any image to gain a point.</li>
				<li>But if you click on the same image twice, you lose.</li>
				<li>Collect all 12 nerds to win.</li>
			</ul>
		</div>
	</header>
);
export default Jumbotron;