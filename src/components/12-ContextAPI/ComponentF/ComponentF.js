import React, { Component } from "react";
import { UserConsumer } from "../userContext";

class ComponentF extends Component {
	render() {
    console.log(React.version);
		return (
			<UserConsumer>
				{(userName) => {
					return <h1>I'm {userName}</h1>;
				}}
			</UserConsumer>
		);
	}
}

export default ComponentF;
