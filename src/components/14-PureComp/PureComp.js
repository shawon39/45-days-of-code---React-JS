import React, { PureComponent } from "react";

class PureComp extends PureComponent {
	render() {
		console.log("------ Pure Component ------");
		return (
			<div>
				<h4>Pure Component : {this.props.name}</h4>
			</div>
		);
	}
}

export default PureComp;
