import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResult from "./searchResult.js";

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			search: {
				name: "",
				types: [],
			},
			advancedSearch: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.searchToggle = this.searchToggle.bind(this);
	}

	handleChange(e) {
		this.setState({
			input: e.target.value,
		});
	}

	searchToggle() {
		this.setState((state) => {
			if (state.advancedSearch) {
				return { advancedSearch: false };
			} else {
				return { advancedSearch: true };
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			input: "",
			search: {
				name: this.state.input,
			},
		});
	}

	render() {
		const searchIcon = <FontAwesomeIcon icon={faSearch} />;

		return (
			<div>
				<form
					onSubmit={this.handleSubmit}
					className={"Search"}
				>
					<input
						className={"SearchBar"}
						value={this.state.input}
						type="text"
						onChange={this.handleChange}
					></input>

					<button
						className={"SearchButton"}
						onClick={this.searchToggle}
					>
						Advanced
					</button>
					<button
						type="submit"
						className={"SearchButton"}
						onClick={this.handleSubmit}
					>
						{searchIcon}
					</button>
				</form>
				{this.state.advancedSearch ? (
					<div>
						<h1>SEX</h1>
					</div>
				) : null}

				<SearchResult search={this.state.search} />
			</div>
		);
	}
}
