import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import axios from "axios";
import IcoCancel from "../images/cancel.svg";

function Shortener(props) {
	const [isSubmit, setIsSubmit] = useState(false);
	const [shortURL, setShortURL] = useState(null);

	return (
		<div className="usShortener usContainer">
			{shortURL ? (
				<Result shortURL={shortURL} />
			) : (
				<Form
					isSubmit={isSubmit}
					onSubmit={(url) => {
						setIsSubmit(true);
						createShortURL(
							url,
							(response) => {
								setShortURL(response.data.data.shortURL);
							},
							(error) => {
								// TODO
							}
						);
					}}
				/>
			)}
			<img src={IcoCancel} className="usIco usIcoCancle" onClick={props.onCancle} title="Close" alt="" />
		</div>
	);
}

const createShortURL = (url, callBackSucess, callBackError) => {
	axios({
		url: "/api/shortcut",
		method: "POST",
		params: {
			url: url
		}
	})
		.then((response) => {
			callBackSucess(response);
		})
		.catch((error) => {
			callBackError(error);
		});
};

export default Shortener;
