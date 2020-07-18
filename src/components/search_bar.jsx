import React from 'react';

class SearchBar extends React.Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render () {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
