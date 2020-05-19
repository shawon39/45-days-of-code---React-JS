import React, { Component } from "react";

class ChildComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidUpdate() {
		console.log("ChildComp componentDidUpdate!!");
	}

	shouldComponentUpdate() {
		console.log("ChildComp shouldComponentUpdate!!");
		return true;
		// If i returned false then ( componentDidUpdate, Render ) will not call
	}

	render() {
		return (
			<div>
				<p> Count: {this.state.count} </p>{" "}
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Click me{" "}
				</button>{" "}
			</div>
		);
	}
}

export default ChildComp;
