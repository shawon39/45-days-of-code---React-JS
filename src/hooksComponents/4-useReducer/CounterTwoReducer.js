import React, { useReducer } from "react";

const initialState = {
	firstCounter: 0,
	secondCounter: 10,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, firstCounter: state.firstCounter + action.value };
		case "decrement":
			return { ...state, firstCounter: state.firstCounter - action.value };
		case "increment2":
			return { ...state, secondCounter: state.secondCounter + action.value };
		case "decrement2":
			return { ...state, secondCounter: state.secondCounter - action.value };
		case "increment5":
			return { ...state, firstCounter: state.firstCounter + action.value };
		case "decrement5":
			return { ...state, firstCounter: state.firstCounter - action.value };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function CounterTwoReducer() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<p>First Counter : {count.firstCounter}</p>
			<p>Second Counter : {count.secondCounter}</p>

			<button onClick={() => dispatch({ type: "increment", value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "increment5", value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: "increment2", value: 2 })}>
				Increment 2
			</button>
			<button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
				Decrement 2
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
}

export default CounterTwoReducer;
