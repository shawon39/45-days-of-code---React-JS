import React, { Component } from "react";
import withCounter from '../withCounter/withCounter';

class HoverCounter extends Component {

	render() {
    const {count, IncrementCounter} = this.props;
		return (
			<div>
        <p>Name : {this.props.name}</p>
				<h4>Counter : {count}</h4>
				<button
					className="btn btn-primary my-4"
					onMouseOver={IncrementCounter}
				>
					Hover Me
				</button>
			</div>
		);
	}
}

export default withCounter(HoverCounter, 5);
