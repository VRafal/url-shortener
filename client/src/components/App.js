import React, { useState } from "react";
import WelcomButton from "./WelcomButton";
import Shortener from "./Shortener";

import "./App.scss";

function App() {
	const [isExpanded, setIsExpanded] = useState(false);

	const classExpand = isExpanded ? "expanded" : "";

	return (
		<div className={`usApp ${classExpand}`}>
			{isExpanded ? <Shortener onCancle={() => setIsExpanded(!isExpanded)} /> : <WelcomButton onClick={() => setIsExpanded(!isExpanded)} />}
		</div>
	);
}
export default App;
