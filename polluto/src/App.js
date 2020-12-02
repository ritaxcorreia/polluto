import React, { useEffect } from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";
import { usePosition } from "use-position";
import Footer from "./components/Footer";

function App() {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	// fetch from the API
	// 	// store the result in data via setData()
	// }, []);

	return (
		<div>
			<h1 className="polluto-logo">polluto.</h1>

			<SimpleMap />

			<Footer footerText="⚡️ Built by Rita Correia in ReactJS for General Assembly JSD December 2020 ⚡️" />
		</div>
	);
}

const Marker = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
	const { latitude, longitude, error } = usePosition();

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

	const center = {
		lat: latitude,
		lng: longitude,
	};

	return (
		<div style={{ height: "90vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyA0ilaCkaAdHbwnSicLrPX9AqRRJZjMWAg",
				}}
				defaultCenter={center}
				defaultZoom={12}
			>
				<Marker lat={center.lat} lng={center.lng} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
};

export default App;
