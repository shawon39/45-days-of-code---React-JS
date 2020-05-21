import React, { Component } from "react";
import axios from "axios";

class GetDataAxios extends Component {
	state = {
		posts: [],
	};

	UlStyle = {
    display: 'Grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    textAlign: ''
	};

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				this.setState({
					posts: response.data,
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
    let { posts } = this.state; // Destructuring
    let postCount = 0;

		if (posts.length === 0) {
			return <h3>Loading...</h3>;
		} else {
			return (
				<div className="container">
					<ul className="list-group" style={this.UlStyle}>
						{posts.map((post) => (
							<li key={post.id} className="list-group-item">
								{++postCount}. {post.title}
							</li>
						))}
					</ul>
				</div>
			);
		}
	}
}

export default GetDataAxios;
