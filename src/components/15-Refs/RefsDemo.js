import React, { Component } from "react";

class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focus();
		console.log(this.inputRef);
	}

	HandleInput = () => {
    console.log(this.inputRef.current.value);
		// this.inputRef.current.value = '';
	};

	render() {
		return (
			<div>
				<input className="form-control" type="text" ref={this.inputRef} />
				<button className="btn btn-primary my-4" onClick={this.HandleInput}>
					Click Me
				</button>
			</div>
		);
	}
}

export default RefsDemo;
