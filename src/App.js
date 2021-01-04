import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { usePosition } from "use-position";
import { format, parseISO } from "date-fns";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Header from "./components/Header";

// Renders app UI
function App() {
	return (
		<div>
			<Header taglineText="Your real-time air pollution tracker" />
			<SimpleMap />
			{/* <Footer footerText="⚡️ Built by Rita Correia in ReactJS, Dec 2020 ⚡️" /> */}
		</div>
	);
}

// Renders Map, stores user's coords on pageload (usePosition)
const SimpleMap = () => {
	const { latitude, longitude, error } = usePosition();

	const [cardState, setCardState] = useState({
		lat: null,
		lng: null,
		position: "absolute",
		city: "",
		state: "",
		country: "",
		ts: "",
		aqius: "",
		mainus: "",
	});

	if (error !== null) {
		return (
			<div className="loading">
				Error getting your current location, please reload page
			</div>
		);
	}

	if (!latitude || !longitude) {
		return (
			<div>
				<p className="loading">Loading map...</p>
			</div>
		);
	}

	const defaultCenter = {
		lat: latitude,
		lng: longitude,
	};

	let zoom;

	// This fetches new pollution information on the given latitude and longitude
	// and updates the card state
	function fetchPollutionAPI(lat, lng) {
		fetch(
			`https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lng}&key=4a6dd48a-819d-4f42-943c-e84587a03a4f`
		)
			.then((response) => response.json())
			.then(function ({ data }) {
				console.log("data", data);

				// turns the timestamp string into a javascript Date
				const timestamp = parseISO(data.current.pollution.ts);

				// turns the javascript Date into a string that we like (based on the formatting options from date-fns)🥰
				const formattedTimestamp = format(timestamp, "PPpp");

				setCardState({
					lat: lat,
					lng: lng,
					city: data.city,
					state: data.state,
					country: data.country,
					ts: formattedTimestamp,
					aqius: data.current.pollution.aqius,
					mainus: data.current.pollution.mainus,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	// Renders Google Map and data card component (https://github.com/google-map-react/google-map-react/blob/master/API.md)
	return (
		<div style={{ height: "90vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyA0ilaCkaAdHbwnSicLrPX9AqRRJZjMWAg",
				}}
				defaultCenter={defaultCenter}
				defaultZoom={12}
				onChange={({ center }) => {
					// this onChange is triggered on map load and map pan/zoom
					console.log(zoom);

					fetchPollutionAPI(center.lat, center.lng);
				}}
				onClick={({ lat, lng }) => {
					// this onClick is triggered on map click
					fetchPollutionAPI(lat, lng);
				}}
			>
				{/* const ZoomChanged = ({ zoom }) => {
		if (zoom < 9) return null;
	}; */}

				{/* <Card className={this.state.show ? '' : 'hide'} */}
				<Card
					lat={cardState.lat}
					lng={cardState.lng}
					city={cardState.city}
					state={cardState.state}
					country={cardState.country}
					ts={cardState.ts} //timestamp
					aqius={cardState.aqius} // air quality index US
					mainus={cardState.mainus} // main pollutant
				/>
			</GoogleMapReact>
		</div>
	);
};

export default App;
