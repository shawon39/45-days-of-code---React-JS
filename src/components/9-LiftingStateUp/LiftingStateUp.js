import React, { Component } from "react";
import One from "./One";
import Two from "./Two";

class LiftingStateUp extends Component {
	state = {
		count: 0,
	};

	Increment = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	Decrement = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		return (
			<div>
				<One
					count={this.state.count}
					Increment={this.Increment}
					Decrement={this.Decrement}
				/>
				<Two
					count={this.state.count}
					Increment={this.Increment}
					Decrement={this.Decrement}
				/>
			</div>
		);
	}
}

export default LiftingStateUp;
