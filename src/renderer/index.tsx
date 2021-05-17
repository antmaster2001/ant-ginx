import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import "tailwindcss/tailwind.css"

//styles
import "./Styles/app.css";
import "./Styles/constants.css";
import "./Styles/custom.css";


const Index = () => {
	return (
		<App />
	);
}

ReactDom.render(
	<Index />,
	document.getElementById('app'),
)