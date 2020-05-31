import React, { Component } from "react";
import ComponentC from "./ComponentC/ComponentC";
import { UserProvider } from "./userContext";

class ContextAPI extends Component {
	render() {
		return (
			<UserProvider value="Shawon">
				<ComponentC />
			</UserProvider>
		);
	}
}

export default ContextAPI;
