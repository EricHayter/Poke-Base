import React from "react";
import ResultCard from "./ResultCard.js";
import pokemonData from "../db.js";
import "../App.css";

export default class SearchResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: 20,
		};
		this.moreResults = this.moreResults.bind(this);
	}

	moreResults = () => {
		this.setState((state) => {
			return { results: state.results + 20 };
		});
	};

	render() {
		let search = pokemonData.filter(
			(pokemon) =>
				pokemon.name
					.toLowerCase()
					.indexOf(
						this.props.search.name.toLowerCase()
					) !== -1
		);

		let results = search
			.slice(0, this.state.results)
			.map((pokemon) => (
				<ResultCard
					key={pokemon.name}
					pokemon={pokemon}
				/>
			));

		return (
			<div>
				<p className={"NumResults"}>
					{search.length} total results
				</p>
				<div>{results}</div>
				{search.length > this.state.results ? (
					<button
						className={"MoreResultsButton"}
						onClick={this.moreResults}
					>
						More Results
					</button>
				) : null}
			</div>
		);
	}
}

