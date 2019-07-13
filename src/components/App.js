import React from 'react';
import SearchBar from './search/SearchBar';

class App extends React.Component {

  onSearchSubmit = (term) => {
    console.log("Searching", term)

    //TODO send API request to get images
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={ this.onSearchSubmit }/>
      </div>
    );
  }
}

export default App;