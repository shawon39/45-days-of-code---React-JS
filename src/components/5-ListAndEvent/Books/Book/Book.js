import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
	state = {
		isEditable: false,
	};

	changeValueName = (event) => {
		this.props.editHandler(event.target.value, this.props.book.id);
	};

	changeValuePrice = (event) => {
		let price = Number(event.target.value);
		this.props.editHandler(price, this.props.book.id);
	};

	SaveTheState = (event) => {
		if (event.key === "Enter") {
			this.setState({
				isEditable: false,
			});
		}
	};

	// componentWillUnmount() {
	// 	console.log("Deleted!");
	// }

	render() {
		let bookName = this.state.isEditable ? (
			<input
				type="text"
				onChange={this.changeValueName}
				onKeyPress={this.SaveTheState}
				value={this.props.book.name}
			/>
		) : (
			<p>{this.props.book.name}</p>
		);

		let bookPrice = this.state.isEditable ? (
			<input
				className="ml-auto"
				type="number"
				onKeyPress={this.SaveTheState}
				onChange={this.changeValuePrice}
				value={this.props.book.price}
			/>
		) : (
			<span className="ml-auto">{this.props.book.price}</span>
		);

		return (
			<li className="list-group-item d-flex">
				{bookName}
				{bookPrice}
				<div className="mx-4">
					<span
						className="iconList"
						onClick={() => {
							this.props.deleteHandler(this.props.book.id);
						}}
					>
						<i className="fas fa-trash"></i>
					</span>
					<span
						className="iconList mx-4"
						onClick={() => {
							this.setState({ isEditable: true });
						}}
					>
						<i className="fas fa-edit"></i>
					</span>
				</div>
			</li>
		);
	}
}

export default Book;
