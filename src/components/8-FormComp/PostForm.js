import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class PostForm extends Component {
	state = {
		body: "",
		title: "",
		userId: "111",
	};

	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	submitHandler = (event) => {
		event.preventDefault();
		axios
			.post(`${BASE_URL}/posts`, this.state)
			// .post method take two argument one is endpoint another one is object which data you are passing to insert a new post !!
			.then((response) => console.log("ok", response))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type="text"
					className="form-control"
					name="title"
					value={this.state.title}
					placeholder="Enter your title"
					onChange={this.changeHandler}
				/>
				<textarea
					name="body"
					className="form-control"
					placeholder="Enter your text"
					value={this.state.body}
					onChange={this.changeHandler}
				/>

				<button type="submit" className="btn btn-success">
					Submit
				</button>
			</form>
		);
	}
}

export default PostForm;
