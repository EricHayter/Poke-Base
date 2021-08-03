import React from "react";
import { ResultCard } from "./ResultCard.js";
import { pokemonData } from "../db.js";
import { connect } from "react-redux";

const mapStateToProps = function (state) {
  return {
    search: state.search,
  };
};

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: 20,
    };
    this.moreResults = this.moreResults.bind(this);
  }

  moreResults = () => {
    this.setState((state) => {
      return {results: state.results + 20};
    });
  };

  render() {
    let search = pokemonData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==
        -1
    );

    let results = search
      .slice(0, this.state.results)
      .map((pokemon) => <ResultCard key={pokemon.name} pokemon={pokemon} />);

    return (
      <div>
        <p>{search.length} total results</p>
        <div>{results}</div>
        {search.length > this.state.results ? <button onClick={this.moreResults}>More Results</button> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchResult);
