import React, { useState, useEffect } from "react";
import axios from "axios";

function InputDataFetching() {
	const [post, setPost] = useState({});
	const [Id, setId] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
			.then((response) => {
        console.log('Ok!');
				setPost(response.data);
			})
			.catch((err) => console.log(err));
	},[Id]);

	return (
		<div>
			<input type="text" value={Id} onChange={(e) => setId(e.target.value)} />
			<h4>Title: {post.title}</h4>
		</div>
	);
}

export default InputDataFetching;
