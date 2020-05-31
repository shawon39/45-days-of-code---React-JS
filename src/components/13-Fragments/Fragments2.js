import React, { Component } from "react";

// So our app is clean. We have no Extra div elements.

class Fragments2 extends Component {
	Books = ["Harry Potter", "The End", "Nano"];

	render() {
		return (
			<React.Fragment>
				{this.Books.map((book) => {
					return (
						<React.Fragment key={book}>
							<p>{book}</p>
						</React.Fragment>
					);
				})}
			</React.Fragment>
		);
	}
}

export default Fragments2;
