import React, { useState } from "react";
import isUrl from "is-valid-http-url";

function Form(props) {
	const [inputVal, setInputVal] = useState("");
	const actualURL = window.location.href;

	return (
		<div className="usForm">
			<p>URL:</p>
			<input
				name="url"
				id="usURLInput"
				placeholder={actualURL}
				onChange={(e) => {
					setInputVal(e.target.value);
				}}
				disabled={props.isSubmit}
			/>
			<button
				disabled={!(isUrl(inputVal) || inputVal.length == 0) || props.isSubmit}
				onClick={() => {
					let inputVal = document.getElementById("usURLInput").value;
					props.onSubmit(inputVal.length == 0 ? actualURL : inputVal);
				}}
			>
				Create
			</button>
		</div>
	);
}

export default Form;
