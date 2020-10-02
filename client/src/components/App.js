import React, { useState } from "react";
import WelcomButton from "./WelcomButton";
import Shortener from "./Shortener";
import IcoLink from "../images/url-2.svg";
import IcoCancel from "../images/cancel.svg";

import "./App.scss";

function App() {
	const [isExpanded, setIsExpanded] = useState(true);

	const classExpand = isExpanded ? "expanded" : "";
	const clasNameList = `usApp ${classExpand}`;

	return (
		<div className={clasNameList}>
			{isExpanded ? <Shortener onCancle={() => setIsExpanded(!isExpanded)} /> : <WelcomButton onClick={() => setIsExpanded(!isExpanded)} />}
		</div>
	);
}
export default App;
