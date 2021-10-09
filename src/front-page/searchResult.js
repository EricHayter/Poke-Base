import React from "react";
import ResultCard from "./ResultCard.js";
import pokemonData from "../db.js";
import "../App.css";

// This filters the results of the pokemon
const filteredSearch = (pokemon, types) => {
  if (types.length === 0) {
    return true;
  } else {
    if (
      types.indexOf(pokemon.type1) !== -1 ||
      types.indexOf(pokemon.type2) !== -1
    ) {
      return true;
    }
  }
};

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
      return { ...state, results: state.results + 20 };
    });
  };

  render() {
    const { name,types } = this.props.search;
    console.log(name);
    let search = pokemonData.filter(
      (pokemon) =>
        filteredSearch(pokemon, types) &&
        pokemon.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );

    let results = search
      .slice(0, this.state.results)
      .map((pokemon) => <ResultCard key={pokemon.name} pokemon={pokemon} />);
    return (
      <div>
        <p className={"NumResults"}>{search.length} total results</p>
        <div>{results}</div>
        {search.length > this.state.results ? (
          <button className={"MoreResultsButton"} onClick={this.moreResults}>
            More Results
          </button>
        ) : null}
      </div>
    );
  }
}
