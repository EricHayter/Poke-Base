import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResult from "./searchResult.js";

const TYPES = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fairy', 'Fighting', 'Fire',
  'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic',
  'Rock', 'Steel', 'Water']

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      name: "",
      types: [],
      advancedSearch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  }

  searchToggle() {
    this.setState((state) => {
      if (state.advancedSearch) {
        return { ...this.state, advancedSearch: false };
      } else {
        return { ...this.state, advancedSearch: true };
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();


    if (this.state.advancedSearch) {
      let checked = [];
      for (let i = 0; i < TYPES.length; i++) {
        if (document.getElementById(TYPES[i]).checked === true) {
          checked.push(TYPES[i].toLowerCase());
        }
      }

      this.setState({
        ...this.state,
        types: checked,
        name: this.state.input,
        input: "",
      })
    } else {
      this.setState({
        ...this.state,
        name: this.state.input,
        input: "",
      });
    }

    console.log(this.state);
  }

  render() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />;


    return (
      <div>
        <form onSubmit={this.handleSubmit} className={"Search"}>
          <input
            className={"SearchBar"}
            value={this.state.input}
            type="text"
            onChange={this.handleChange}
          ></input>

          <button type="button" className={"SearchButton"} onClick={this.searchToggle}>
            Advanced
          </button>

          <button
            type="submit"
            className={"SearchButton"}
            onClick={this.handleSubmit}
          >
            {searchIcon}
          </button>

          {this.state.advancedSearch ? (
            <div className="AdvancedSearchMenu">
              {TYPES.map((n) => {
                if (this.state.types.indexOf(n.toLowerCase()) !== -1) {
                  return <label className="TypeFilter"><input type="checkbox" id={n} defaultChecked></input> {n} </label>
                } else {
                  return <label className="TypeFilter"><input type="checkbox" id={n}></input> {n} </label>
                }

              })}
            </div>
          ) : null}
        </form>



        <SearchResult search={this.state} />
      </div>
    );
  }
}
