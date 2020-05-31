import React, { Component } from "react";

class ReqComp extends Component {

	render() {
		console.log("------ Regular Component ------");
		return (
			<div>
				<h4>Regular Component : {this.props.name}</h4>
			</div>
		);
	}
}

export default ReqComp;
