import React from "react";
import useInput from "./useInput";

function FormComponent() {
	const [firstName, bindFirstName, resetFirstName] = useInput("");
	const [lastName, bindLastName, resetLastName] = useInput("");

	const submitHandler = (event) => {
		event.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>First Name</label>
				<input {...bindFirstName} type="text" />
			</div>
			<div>
				<label>Last Name</label>
				<input {...bindLastName} type="text" />
			</div>
			<button type="submit">Click Me</button>
		</form>
	);
}

export default FormComponent;
