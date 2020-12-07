import React from "react";
import "./Card.css";

const Card = ({ city, state, country, ts, aqius, mainus }) => {
	// If Statement here: SWITCH/CASE to define Card background colours depending on AQI US
	let aqiClassName;
	let airQualityLevel;

	// Conditional AQI background depending on air pollution levels
	if (aqius <= 50) {
		aqiClassName = "goodAQI";
		airQualityLevel = "Good";
	} else if (aqius < 100) {
		aqiClassName = "moderateAQI";
		airQualityLevel = "Moderate";
	} else if (aqius < 150) {
		aqiClassName = "highAQI";
		airQualityLevel = "High";
	} else if (aqius < 200) {
		aqiClassName = "unhealthyAQI";
		airQualityLevel = "Unhealthy";
	} else if (aqius < 300) {
		aqiClassName = "veryUnhealthyAQI";
		airQualityLevel = "Very Unhealthy";
	} else {
		aqiClassName = "hazardousAQI";
		airQualityLevel = "Hazardous";
	}

	return (
		<div className="card-container">
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

			<div className="line"></div>
			<div>
				<h2>Air quality index (US):</h2>
				<div className={`AQI-box ${aqiClassName}`}>
					<h3 className="AQIndex">{aqius} </h3>
					<h4 className="AQtext">{airQualityLevel}</h4>
				</div>
				<h2 className="main-pollutant">Main pollutant: {mainus}</h2>
				<p>Last updated: {ts}</p>
			</div>
		</div>
	);
};

export default Card;
