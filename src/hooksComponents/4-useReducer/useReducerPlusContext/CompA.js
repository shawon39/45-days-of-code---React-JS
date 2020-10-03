import React, { useContext } from "react";
import { CountContext } from "./MainComponent";

function CompA() {
	const countContext = useContext(CountContext);
	return (
		<div>
      Count : {countContext.countState}
			<span style={{marginRight: '10px'}}></span>
			<button onClick={() => countContext.countDispatch("increment")}>
				Increment
			</button>
			<button onClick={() => countContext.countDispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => countContext.countDispatch("reset")}>Reset</button>
		</div>
	);
}

export default CompA;
