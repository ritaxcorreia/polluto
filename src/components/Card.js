import React from "react";
import "./Card.css";

const Card = ({ city, state, country, ts, aqius, mainus }) => {
	// If Statement, to define Card background colours depending on AQI US
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

	// Returns card UI with fetched data
	return (
		<article className="card-container">
			<header className="card-header">
				<img
					className="polluto-icon"
					src="../polluto-icon-white.png"
					alt=""
				/>
				<h3 className="city-text">
					<div>{city}</div>
					<div>
						{state}, {country}
					</div>
				</h3>
			</header>

			<div className="card-content">
				<h2 className="AQ-title">Air quality index (US):</h2>
				<div className={`AQI-box ${aqiClassName}`}>
					<h3 className="AQIndex">{aqius} </h3>
					<h4 className="AQtext">{airQualityLevel}</h4>
				</div>
				<h2 className="main-pollutant">Main pollutant: {mainus}</h2>
				<p className="timestamp">Last updated: {ts.toString()}</p>
			</div>
		</article>
	);
};

export default Card;
