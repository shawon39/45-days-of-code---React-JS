import React from "react";

class First extends React.Component {
	render() {
		return (
			<div>
				<h2> My Name is: {this.props.name} </h2>{" "}
				<h3> Email: {this.props.email} </h3>{" "}
				<p> Address: {this.props.address} </p>{" "}
			</div>
		);
	}
}

export default First;
