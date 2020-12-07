import React from "react";

const Card = ({ city, state, country, ts, aqius, mainus }) => {
	// If Statement here: SWITCH/CASE to define Card background colours depending on AQI US
	let aqiClassName;

	switch ({ aqiClassName }) {
		case { aqius } === 0 > 50:
			aqiClassName = "goodAQI";
			break;
		case { aqius } === 51 > 99:
			aqiClassName = "moderateAQI";
			break;
		case { aqius } === 100 > 149:
			aqiClassName = "highAQI";
			break;
		case { aqius } === 150 > 199:
			aqiClassName = "unhealthyAQI";
			break;
		case { aqius } === 200 > 299:
			aqiClassName = "veryUnhealthyAQI";
			break;
		case { aqius } === 300 > 1000:
			aqiClassName = "hazardousAQI";
			break;
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
