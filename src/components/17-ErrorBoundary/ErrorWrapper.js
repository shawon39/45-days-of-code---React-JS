import React, { Component } from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

class ErrorWrapper extends Component {
	render() {
		return (
			<div>
				<ErrorBoundary>
					<Hero heroName="Hero1" />
				</ErrorBoundary>
				<ErrorBoundary>
					<Hero heroName="Hero2" />
				</ErrorBoundary>
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary>
			</div>
		);
	}
}

export default ErrorWrapper;
