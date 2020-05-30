import React, { Component } from "react";
import withCounter from '../withCounter/withCounter';

class ClickCounter extends Component {

	render() {
    const { count, IncrementCounter } = this.props;
		return (
			<div>
        <h1 className="mb-4">Higher Order Component ( HOC )</h1>
        <p>Name : {this.props.name}</p>
				<h4>Counter : {count}</h4>
				<button
					className="btn btn-primary my-4"
					onClick={IncrementCounter}
				>
					Click Me
				</button>
			</div>
		);
	}
}

export default withCounter(ClickCounter, 10);
