import React from 'react';
import { format } from 'url';

import "./SearchBar.css";


class SearchBar extends React.Component {
  // TODO: Get user location and pre-populate search bar with user city
  state = { term: '' };

  onInputChange(e) {
    console.log(e.target.value)

    let term = e.target.value;
    this.setState({term});
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) } className="search_bar_form">
        <input 
          type="text" 
          value={ this.state.term } 
          onChange={ this.onInputChange.bind(this) } 
        />
      </form>
    )
  }
}

export default SearchBar;