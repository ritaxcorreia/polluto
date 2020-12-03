import React, { useEffect } from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";
import { usePosition } from "use-position";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<h1 className="polluto-logo">polluto.</h1>

			<SimpleMap />

			<Footer footerText="⚡️ Built by Rita Correia in ReactJS for General Assembly JSD December 2020 ⚡️" />
		</div>
	);
}

const SimpleMap = () => {
	const { latitude, longitude, error } = usePosition();

	console.log(latitude);
	console.log(longitude);

	const apiUrl = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=4a6dd48a-819d-4f42-943c-e84587a03a4f`;

	// const [showResults, setShowResults] = React.useState(false);
	// const onChange = () => setShowResults(true);

	let Card;

	// Fetches data from IQAir Air Visual Air Pollution API
	useEffect(() => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then(function (data) {
				let city = data.city;
				let state = data.state;
				let country = data.country;
				let { ts, aqius, mainus } = data.current.pollution;
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	if (error !== null) {
		return <div>Error getting your current location</div>;
	}

	if (!latitude || !longitude) {
		return (
			<div>
				<p className="loading">Loading map...</p>
			</div>
		);
	}

	// Finds center by using user's own location coords (lat, lng)
	const center = {
		lat: latitude,
		lng: longitude,
	};

	Card = ({ title, city, state, country, ts, aqius, mainus }) => (
		<div className="card-container">
			<h2 className="card-title">{title}</h2>
			<h3 className="city-text">{city}</h3>
		</div>
	);

	return (
		<div style={{ height: "90vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyA0ilaCkaAdHbwnSicLrPX9AqRRJZjMWAg",
				}}
				defaultCenter={center}
				defaultZoom={12}
				onChange={({ center, zoom }) => {
					console.log(center);
					console.log(zoom);
				}}
			>
				<Card lat={center.lat} lng={center.lng} title="Air Pollution" />
			</GoogleMapReact>
		</div>
	);
};

export default App;
