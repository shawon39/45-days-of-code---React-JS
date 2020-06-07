import React, { useState, useEffect } from "react";

function HookCounterTwo() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) => {
		console.log("Mouse Move");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("useEffect Called !");
		window.addEventListener("mousemove", logMousePosition);

		return () => {
			window.removeEventListener("mousemove", logMousePosition);
		};
	}, []);

	return (
		<div>
			Hooks X - {x} - Y {y}
		</div>
	);
}

export default HookCounterTwo;
