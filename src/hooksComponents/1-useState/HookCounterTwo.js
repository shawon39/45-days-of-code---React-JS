import React from "react";
import { useState } from "react";

// Previous State is safe way!

function HookCounterTwo() {
	const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  
  const incrementFive =() => {
    for(let i=1; i<=5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  }

	return (
		<div>
			<p>Count : {count}</p>
			<button onClick={() => setCount(initialValue)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
      <button onClick={incrementFive}>IncrementFive</button>
		</div>
	);
}

export default HookCounterTwo;
