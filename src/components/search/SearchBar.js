import React from "react";
import { format } from "url";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form className="search_bar_form" onSubmit={this.onSubmit}>
          <label>Search for Images</label>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
        </form>
    <div>{this.state.searchTerm}</div>
      </div>
    );
  }
}

export default SearchBar;
