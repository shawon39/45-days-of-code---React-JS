import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				console.log(response);
				setPosts(response.data);
			})
			.catch((err) => console.log(err));
	},[]);

	return (
		<div>
			{posts.map((post) => (
				<React.Fragment key={post.id}>
					<li className="list-group-item">{post.title}</li>
				</React.Fragment>
			))}
		</div>
	);
}

export default DataFetching;
