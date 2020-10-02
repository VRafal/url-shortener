import React from "react";
import copy from "copy-to-clipboard";
import IcoCopy from "../images/copy-2.svg";

function Result(props) {
	return (
		<div className="usResult">
			<p>Short URL</p>
			<input id="usShortURLInput" name="shortURL" value={props.shortURL} disabled="true" />
			<img
				src={IcoCopy}
				className="usIco"
				onClick={() => {
					copy(props.shortURL);
				}}
			/>
		</div>
	);
}

export default Result;
