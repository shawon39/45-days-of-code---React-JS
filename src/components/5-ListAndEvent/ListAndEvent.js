import React, { Component } from "react";

import Books from "./Books/Books";

class ListAndEvent extends Component {
	state = {
		books: [
			{
				id: 1,
				name: "Javascript",
				price: 1000,
			},
			{
				id: 2,
				name: "Typescript",
				price: 2000,
			},
			{
				id: 3,
				name: "Node JS",
				price: 5000,
			},
		],
	};

	deleteHandler = (id) => {
		let newBooks = this.state.books.filter((book) => {
			return book.id !== id;
		});
		this.setState({
			books: newBooks,
		});
	};

	editHandler = (inputText, id) => {
		let newBooks = this.state.books.map((book) => {
			if (book.id === id) {
				let obj;
				if (typeof inputText === "string") {
					obj = {
						...book,
						name: inputText,
					};
				} else {
					obj = {
						...book,
						price: inputText,
					};
				}
				return obj;
			} else {
				return book;
			}
		});
		this.setState({
			books: newBooks,
		});
	};

	render() {
		return (
			<div>
				{/* We Used Bind here because, deleteHandler place in ListAndEvent component but it called from Book component. this.setState will refer book component that's the problem because this.setState is place in ListAndEvent Component. For the arrow function bind doesn't need. For risk free we can bind it */}
				<Books
					deleteHandler={this.deleteHandler.bind(this)}
					editHandler={this.editHandler.bind(this)}
					books={this.state.books}
				/>
			</div>
		);
	}
}

export default ListAndEvent;
