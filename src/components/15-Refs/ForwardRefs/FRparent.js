import React, { Component } from "react";
import FRchild from "./FRchild";

class FRparent extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	clickHandler = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
        <h3 className="mb-4">Forward Ref</h3>
				<FRchild ref={this.inputRef} />
				<button className="btn btn-primary my-4" onClick={this.clickHandler}>
					Click Me
				</button>
			</div>
		);
	}
}

export default FRparent;
