import React from "react";


//components
import MainComponent from "./Components/GeneralComponents/mainComponent";
import HeadDisplay from "./Components/GeneralComponents/HeadComponent";

const App = () => {
	return (
		<div className="App">
			<HeadDisplay />
			<MainComponent />
		</div>
	);
}

export default App;