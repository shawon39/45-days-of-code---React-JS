import React from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
import { useState } from "react";
import { useCallback } from "react";

function ParentComponent() {
	const [age, setAge] = useState(0);
	const [salary, setSalary] = useState(50000);

	const incrementAge = useCallback(() => {
		setAge(age + 2);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 10000);
	}, [salary]);

	return (
		<div>
			<Title />
			<Count text="age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	);
}

export default ParentComponent;
