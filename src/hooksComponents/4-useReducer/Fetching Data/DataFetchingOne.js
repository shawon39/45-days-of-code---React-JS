import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [post, setPost] = useState({});

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => {
				setLoading(false);
				setError("");
				setPost(response.data);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something is Wrong !");
				setPost({});
			});
	}, []);

	return (
		<div>
			{loading ? <h4>Loading...</h4> : post.title}
			{error ? error : null}
		</div>
	);
}

export default DataFetchingOne;
