import React, { Component } from "react";

const withCounter = (WrapperComponent, incrementNumber) => {
	class NewComponent extends Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}

		IncrementCounter = () => {
			this.setState((prevState) => {
				return {
					count: prevState.count + incrementNumber,
				};
			});
		};

		render() {
			return (
				<WrapperComponent
					count={this.state.count}
					IncrementCounter={this.IncrementCounter}
					name = "Shawon"
					{...this.props}
				/>
			);
		}
	}
	return NewComponent;
};

export default withCounter;
