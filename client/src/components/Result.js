import React from "react";
import copy from "copy-to-clipboard";
import IcoCopy from "../images/copy-2.svg";

function Result(props) {
	return (
		<div className="usResult usContainer">
			<label for="usShortURLInput">Short URL:</label>
			<input id="usShortURLInput" name="shortURL" value={props.shortURL} disabled="true" />
			<img
				src={IcoCopy}
				className="usIco usIcoCopy"
				onClick={() => {
					copy(props.shortURL);
				}}
				title="Copy to clipboard"
			/>
		</div>
	);
}

export default Result;
