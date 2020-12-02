import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";

function Footer(props) {
	return <footer>{props.footerText}</footer>;
}

export default Footer;
