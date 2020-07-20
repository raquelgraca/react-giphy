import React from 'react';

class SavedFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "coconut",
    };
  }

  handleChange = event => {
    alert('Your saved filter is: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    const filters = require("../filters.json");
    return (
      <div>
        <form>
          <label>
            <select onChange={this.handleChange}>
              {filters.saved_filters.map(filter =>(
                <option key={filter.id} value={filter.category}>
                  {filter.category}
                </option>
              ))}
            </select>        
          </label>
        </form>
      </div>
    );
  }
}

export default SavedFilter;
