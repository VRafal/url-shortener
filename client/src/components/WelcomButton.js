import React from "react";
import IcoLink from "../images/url-2.svg";

function WelcomButton(props) {
	return (
		<div className="usWelcomeButton" onClick={props.onClick}>
			<img src={IcoLink} className="usIco" />
			<p>Create short link?</p>
		</div>
	);
}

export default WelcomButton;
