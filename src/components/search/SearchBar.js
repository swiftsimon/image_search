import React from 'react';
import { format } from 'url';

import "./SearchBar.css";


class SearchBar extends React.Component {
  onInputChange(e) {
    console.log(e.target.value)
  }


  render() {
    return (
      <form className="search_bar_form">
        <input type="text" onChange={this.onInputChange} />
      </form>
    )
  }
}

export default SearchBar;