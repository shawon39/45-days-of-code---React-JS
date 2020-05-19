import React from "react";

const StatelessComp = (props) => {
	return (
		<div>
			<h1>I'm a Stateless Component !</h1>
			<p>Name is : {props.name}</p>
		</div>
	);
};

export default StatelessComp;
