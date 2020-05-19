import React, { Component } from "react";

import Book from "./Book/Book";

class Books extends Component {
	render() {
		return (
			<div>
				{this.props.books.map((book) => {
					return (
						<Book
							key={book.id}
							deleteHandler={this.props.deleteHandler}
							editHandler={this.props.editHandler}
							book={book}
						/>
					);
				})}
			</div>
		);
	}
}

export default Books;
