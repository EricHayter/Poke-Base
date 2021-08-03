import React from "react";
import { connect } from "react-redux";
import { searchAction } from "../misc/store.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: "",
    });
    this.props.newSearch(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          type="text"
          onChange={this.handleChange}
        ></input>
        <button type="submit" onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    );
  }
}

//connect redux to component
const mapDispatchToProps = (dispatch) => {
  return {
    newSearch: (search) => {
      dispatch(searchAction(search));
    },
  };
};

Search = connect(null, mapDispatchToProps)(Search);

export { Search };
