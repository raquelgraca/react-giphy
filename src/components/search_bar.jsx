import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render () {
    return (
      <input
        type="text"
        value={this.state.term}
        className="form-control form-search"
        onChange={this.handleUpdate.bind(this)}
      />
    );
  }
}

export default SearchBar;
