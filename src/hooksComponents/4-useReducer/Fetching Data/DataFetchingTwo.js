import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				error: false,
				post: action.payload,
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				error: "Something is Wrong !!",
				post: {},
			};
		default:
			return state;
	}
};

function DataFetchingTwo() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => {
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: "FETCH_ERROR" });
			});
	}, []);

	return (
		<div>
			{state.loading ? <h4>Loading...</h4> : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default DataFetchingTwo;
