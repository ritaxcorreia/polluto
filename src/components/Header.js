import React from "react";
import "./Header.css";

function Header(props) {
	return (
		<>
			<h1 className="polluto-logo">polluto.</h1>
			<h4 className="tagline">{props.taglineText}</h4>
		</>
	);
}

export default Header;
