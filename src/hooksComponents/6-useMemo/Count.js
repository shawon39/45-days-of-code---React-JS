import React, { useState } from "react";
import { useMemo } from "react";

function Count() {
	const [countOne, setCountOne] = useState(0);
	const [countTwo, setCounterTwo] = useState(0);

	const handleCounterOne = () => {
		setCountOne(countOne + 1);
	};

	const handleCounterTwo = () => {
		setCounterTwo(countTwo + 1);
	};

	const isEven = useMemo(() => {
		for (let i = 0; i <= 1000000000; i++);
		return countOne % 2 === 0;
  }, [countOne]); 
  // isEven will run again if countOne changes otherwise it provides caching values

	return (
		<React.Fragment>
			<div>
				<h4>{countOne}</h4>
				<button onClick={handleCounterOne}>Counter One</button>
				<p>{isEven ? "Even" : "Odd"}</p>
			</div>
			<div>
				<h4>{countTwo}</h4>
				<button onClick={handleCounterTwo}>Counter Two</button>
			</div>
		</React.Fragment>
	);
}

export default Count;
