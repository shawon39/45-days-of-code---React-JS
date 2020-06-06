import React, { useState } from "react";

function HookCounterThree() {
	const [name, setName] = useState({ firstName: "", lastName: "" });

	const inputHandler = (event) => {
		setName({ ...name, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<p>First Name: {name.firstName}</p>
			<p>Last Name: {name.lastName}</p>
			<input name="firstName" onChange={inputHandler} type="text" />
			<input name="lastName" onChange={inputHandler} type="text" />
		</div>
	);
}

export default HookCounterThree;
