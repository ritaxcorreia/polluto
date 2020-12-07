import React from "react";
import "./Card.css";

const Card = ({ city, state, country, ts, aqius, mainus }) => {
	// If Statement here: SWITCH/CASE to define Card background colours depending on AQI US
	let aqiClassName;

	// Conditional AQI background depending on air pollution levels
	if (aqius <= 50) {
		aqiClassName = "goodAQI";
	} else if (aqius < 100) {
		aqiClassName = "moderateAQI";
	} else if (aqius < 150) {
		aqiClassName = "highAQI";
	} else if (aqius < 200) {
		aqiClassName = "unhealthyAQI";
	} else if (aqius < 300) {
		aqiClassName = "veryUnhealthyAQI";
	} else {
		aqiClassName = "hazardousAQI";
	}

	return (
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
				<h2>Air quality index (US):</h2>
				<div className={`AQI-box ${aqiClassName}`}>
					<h3 className="AQIndex">{aqius}</h3>
				</div>
				<h2 className="main-pollutant">Main pollutant: {mainus}</h2>
				<p>Last updated: {ts}</p>
			</div>
		</div>
	);
};

export default Card;
