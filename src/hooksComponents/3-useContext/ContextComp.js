import React, { Component } from "react";
import AComponent from './AComponent';
import {UserProvider} from './myContext'

class ContextComp extends Component {
	render() {
		return (
			<UserProvider value="Shawon">
        <AComponent/>
			</UserProvider>
		);
	}
}

export default ContextComp;
