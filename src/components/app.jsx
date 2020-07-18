import React from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "26tPplGWjN0xLybiU"
    };
  }

  search = (query) => {
    // API call
    giphy('i9lLm9AeK99f7FibMhQGgrc5qixogCSZ').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

// SearchBar is passing a props for the search_bar which is a function - search
