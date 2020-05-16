import React from "react";

class First extends React.Component {
	state = {
		name: '',
	};

	HandleEvent = (event) => {
		// console.log(event.target.name);
	};

	inputChange = (event) => {
		// console.log(event.target.value);
		this.setState({
			name: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<input
					onChange={this.inputChange}
					type="text"
					placeholder="Enter your name"
				/>
				<button className="btn btn-primary" onClick={this.HandleEvent}>
					Click me
				</button>

                {/* <button className="btn btn-primary" onClick={(event) => {
                    console.log(event); // this is inline 
                }}>
					Click me
				</button> */}

				{ this.state.name ? <p>Hello, {this.state.name}</p> : '' }
			</div>
		);
	}
}

export default First;
