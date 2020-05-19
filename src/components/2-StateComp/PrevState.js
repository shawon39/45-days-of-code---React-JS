import React, { Component } from "react";

class StateComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	Plus() {
		this.setState( PrevState => ({
			count: PrevState.count + 1,
		}));
	}

	PlusFive() {
		this.Plus();
		this.Plus();
		this.Plus();
		this.Plus();
		this.Plus();
	}

	render() {
		return (
			<div>
				<p> Score: {this.state.count} </p>
				<button onClick={() => this.PlusFive()}> Click Me </button>
			</div>
		);
	}
}

export default StateComp;
