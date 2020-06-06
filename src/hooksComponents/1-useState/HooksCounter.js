import React, { useState } from "react";

function HooksCounter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count : {count} </p>
			<button onClick={() => setCount(count + 1)}>Count</button>
		</div>
	);
}

export default HooksCounter;
