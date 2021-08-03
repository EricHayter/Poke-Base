import { Search } from "./Search.js";
import React from "react";
import SearchResult from "./searchResult.js";

export default class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <SearchResult />
      </div>
    );
  }
}
