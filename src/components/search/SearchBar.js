import React from 'react';
import { format } from 'url';

import "./SearchBar.css";


class SearchBar extends React.Component {
  // TODO: Get user location and pre-populate search bar with user city
  state = { term: '' };

  onInputChange = (e) => {
    let term = e.target.value;
    this.setState({term});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="search_bar_form">
        <input 
          type="text" 
          value={ this.state.term } 
          onChange={ this.onInputChange } 
        />
      </form>
    )
  }
}

export default SearchBar;