import React, { Component } from "react";

const initialState = {
	name: "",
	email: "",
	password: "",
	bio: "",
	country: "",
	gender: "",
	skills: [],
};

class FormComp extends Component {
	constructor() {
		super();
		this.myForm = React.createRef();
	}

	state = {
		...initialState,
	};

	changeHandler = (event) => {
		if (event.target.type === "checkbox") {
			if (event.target.checked) {
				this.setState({
					...this.state,
					skills: this.state.skills.concat(event.target.value),
				});
			} else {
				this.setState({
					...this.state,
					skills: this.state.skills.filter(
						(skill) => skill !== event.target.value
					),
				});
			}
		} else {
			this.setState({
				[event.target.name]: event.target.value,
			});
		}
	};

	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state);

		this.myForm.current.reset();
		this.setState({
			...initialState,
		});
	};

	render() {
		return (
			<form
				style={{ textAlign: "left" }}
				ref={this.myForm}
				onSubmit={this.submitHandler}
			>
				{/* --------- Name --------- */}
				<div className="form-group">
					<label htmlFor="name">Enter your name</label>
					<input
						className="form-control"
						type="text"
						placeholder="your name"
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.changeHandler}
					/>
				</div>
				{/* --------- Email --------- */}
				<div className="form-group">
					<label htmlFor="email">Enter your email</label>
					<input
						className="form-control"
						type="email"
						placeholder="your email"
						name="email"
						id="email"
						value={this.state.email}
						onChange={this.changeHandler}
					/>
				</div>
				{/* --------- password --------- */}
				<div className="form-group">
					<label htmlFor="password">Enter your password</label>
					<input
						className="form-control"
						type="password"
						placeholder="your password"
						name="password"
						id="password"
						value={this.state.password}
						onChange={this.changeHandler}
					/>
				</div>
				{/* --------- bio --------- */}
				<div className="form-group">
					<label htmlFor="name">Enter your bio</label>
					<textarea
						className="form-control"
						type="text"
						placeholder="your bio"
						name="bio"
						id="bio"
						value={this.state.bio}
						onChange={this.changeHandler}
					/>
				</div>
				{/* --------- Select Option --------- */}
				<div className="form-group">
					<label htmlFor="country">Choose your country</label>
					<select
						className="form-control"
						onChange={this.changeHandler}
						name="country"
						id="country"
					>
						<option>Select Your Country</option>
						<option value="Bangladesh">Bangladesh</option>
						<option value="England">England</option>
						<option value="Iran">Iran</option>
						<option value="Sudan">Sudan</option>
					</select>
				</div>
				{/* --------- Radio Button Input --------- */}
				<div className="form-group">
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							onChange={this.changeHandler}
							name="gender"
							id="gender1"
							value="Male"
						/>
						<label htmlFor="gender1">Male</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							onChange={this.changeHandler}
							name="gender"
							id="gender2"
							value="Female"
						/>
						<label htmlFor="gender2">Female</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							onChange={this.changeHandler}
							name="gender"
							id="gender3"
							value="Other"
						/>
						<label htmlFor="gender3">Other</label>
					</div>
				</div>
				{/* --------- CheckBox Input --------- */}
				<div className="form-group">
					<div className="form-check">
						<input
							className="form-check-input"
							onChange={this.changeHandler}
							name="skills"
							type="checkbox"
							value="Java"
							id="java"
						/>
						<label htmlFor="java">Java</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							onChange={this.changeHandler}
							name="skills"
							type="checkbox"
							value="Node JS"
							id="node"
						/>
						<label htmlFor="node">Node JS</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							onChange={this.changeHandler}
							name="skills"
							type="checkbox"
							value="JavaScript"
							id="javascript"
						/>
						<label htmlFor="javascript">JavaScript</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							onChange={this.changeHandler}
							name="skills"
							type="checkbox"
							value="React"
							id="React"
						/>
						<label htmlFor="react">React</label>
					</div>
				</div>
				{/* ---- Submit Button ------ */}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default FormComp;
