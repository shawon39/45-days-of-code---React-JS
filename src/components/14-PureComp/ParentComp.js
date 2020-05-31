import React, { Component } from "react";
import ReqComp from "./ReqComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Shawon",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Shawon",
			});
		}, 2000);
	}

	render() {
		console.log("------ Parent Component ------");
		return (
			<div>
				<ReqComp name={this.state.name} />
				<PureComp name={this.state.name} />
        <MemoComp name={this.state.name}/>
			</div>
		);
	}
}

export default ParentComp;
