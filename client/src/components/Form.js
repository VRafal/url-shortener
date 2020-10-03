import React, { useState, useEffect } from "react";
import isUrl from "is-valid-http-url";

function Form(props) {
	const [inputVal, setInputVal] = useState("");
	const [isValidURL, setIsValidURL] = useState(true);

	const actualURL = window.location.href;

	useEffect(() => {
		setIsValidURL(isUrl(inputVal) || inputVal.length === 0);
	}, [inputVal]);

	const handleButtonClick = () => {
		props.onSubmit(inputVal.length === 0 ? actualURL : inputVal);
	};

	return (
		<div className="usForm usContainer">
			<label htmlFor="usURLInput">URL:</label>
			<input
				name="url"
				id="usURLInput"
				placeholder={actualURL}
				onChange={(e) => {
					setInputVal(e.target.value);
				}}
				disabled={props.isSubmit}
			/>
			<button disabled={!isValidURL} onClick={handleButtonClick}>
				Create
			</button>
		</div>
	);
}

export default Form;
