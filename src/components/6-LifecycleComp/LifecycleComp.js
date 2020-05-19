import React, { Component } from "react";
import ChildComp from "./ChildComp/ChildComp";

class LifecycleComp extends Component {
	constructor(props) {
		super(props);
		console.log("LifeCycleComp Constructor!!");
	}

	componentDidMount() {
		console.log("LifecycleComp componentDidMount!!");
	}

	render() {
		console.log("LifecycleComp Render!!");
		return (
			<div>
				<p>Hello World </p>
        <ChildComp />
			</div>
		);
	}
}

export default LifecycleComp;
