import React from "react";
import "./App.css";
// import PropsComp from "./1-PropsComp/PropsComp";
// import StateComp from "./2-StateComp/StateComp";
//import PrevState from "./2-StateComp/PrevState";
// import EventComp from './3-EventComp/EventComp';
// import StatelessComp from './4-StatelessComp/StatelessComp';
// import ListAndEvent from './5-ListAndEvent/ListAndEvent';
import LifecycleComp from "./6-LifecycleComp/LifecycleComp";

function App() {
	return (
		<div className="App">
			<LifecycleComp />
		</div>
	);
}
export default App;
