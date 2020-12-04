import React from "react";

const Card = ({ city, state, country, ts, aqius, mainus }) => (
	<div className="card-container">
		<div>
			<h3 className="city-text">
				<img
					className="polluto-icon"
					src="../polluto-icon-white.png"
					alt=""
				/>
				{city},
				<br />
				{state}, {country}
			</h3>
		</div>
		<div className="line"></div>
		<div>
			<h2>Air quality index:</h2>
			<div>
				<h3 className="AQIndex">{aqius}</h3>
			</div>
			<h2 className="main-pollutant">Main pollutant: {mainus}</h2>
			<p>{ts}</p>
		</div>
	</div>
);

export default Card;
