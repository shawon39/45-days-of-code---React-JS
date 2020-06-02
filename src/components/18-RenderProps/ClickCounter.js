import React, { Component } from "react";

class ClickCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h4>Counter : {count}</h4>
				<button onClick={incrementCount}>Click Me</button>
			</div>
		);
	}
}

export default ClickCounter;
