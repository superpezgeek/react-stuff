import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only ever set the state during the constructor
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChanged(term);
  }

  render() {
    return (
      <article className="search-bar">
        <input
          placeholder="Search..."
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)} />
      </article>
    );
  }
}

export default SearchBar;
