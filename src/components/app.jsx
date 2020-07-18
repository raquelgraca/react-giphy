import React from 'react';
import SearchBar from './search_bar';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">
        </div>
      </div>
      );
  }
}

export default App;
