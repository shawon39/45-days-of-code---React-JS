import React, { Component } from "react";

import PropsComp from "../1-PropsComp/PropsComp";

class StateComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			color: "Black",
			persons: [
				{ name: "Shawon", email: "shshawon39@gmail.com", address: "Dhaka" },
				{ name: "Nayeem", email: "Nayeem@gmail.com", address: "Dhanmondi" },
				{ name: "Hossain", email: "Hossain@gmail.com", address: "Dhaka" },
			],
		};

		this.state = {
			...this.state,
			persons: [
				{ name: "Shawon", email: "shshawon39@gmail.com", address: "Dhaka" },
				{ name: "Nayeem", email: "Nayeem@gmail.com", address: "Dhanmondi" },
				{ name: "Hossain", email: "Hossain@gmail.com", address: "Dhaka" },
			],
		};
	}

	// for setState 2nd parameter we can control asynchronous call

	Plus = () => {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => {
				if (this.state.count < 0) {
					this.setState({
						color: "Red",
					});
				} else if (this.state.count > 0) {
					this.setState({
						color: "Blue",
					});
				} else {
					this.setState({
						color: "Black",
					});
				}
			}
		);
	};

	Minus = () => {
		this.setState(
			{
				count: this.state.count - 1,
			},
			() => {
				if (this.state.count < 0) {
					this.setState({
						color: "Red",
					});
				} else if (this.state.count > 0) {
					this.setState({
						color: "Blue",
					});
				} else {
					this.setState({
						color: "Black",
					});
				}
			}
		);
	};

	render() {
		return (
			<div style={{ color: this.state.color }}>
				<p>Counter : {this.state.count}</p>
				<button onClick={this.Plus}>Increase</button>
				<button onClick={this.Minus}>Decrease</button>

				{this.state.persons.map((people, index) => {
					return (
						<PropsComp
							key={index}
							name={people.name}
							email={people.email}
							address={people.address}
						/>
					);
				})}
			</div>
		);
	}
}

export default StateComp;
