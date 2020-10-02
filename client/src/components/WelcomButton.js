import React from "react";
import IcoLink from "../images/url-2.svg";

function WelcomButton(props) {
	return (
		<div className="usWelcomeButton usContainer" onClick={props.onClick}>
			<img src={IcoLink} className="usIco usIcoLink" />
			<p>Create short link</p>
		</div>
	);
}

export default WelcomButton;
