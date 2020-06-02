import React, { Component } from "react";

class HoverCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h4>Counter : {count}</h4>
				<button onMouseOver={incrementCount}>Click Me</button>
			</div>
		);
	}
}

export default HoverCounter;
