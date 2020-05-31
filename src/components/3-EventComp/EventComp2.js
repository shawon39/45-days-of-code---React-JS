import React, { Component } from "react";

class EventComp2 extends Component {
	state = {
		count: 0,
	};

	HandleClick = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div>
				<p>Count : {this.state.count}</p>
				<button onClick={this.HandleClick}>Click Me</button>
        {/* <button onClick={this.HandleClick.bind(this)}>Click Me</button> */}
        {/* <button onClick={ () => this.HandleClick()}>Click Me</button> */}
			</div>
		);
	}
}

export default EventComp2;
