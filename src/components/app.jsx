import React from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import SavedFilter from './saved_filter';
import ButtonFilter from './button_filter';
import DropdownCard from './dropdown_card';
// import ButtonWithDd from './button_dp';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
      open: false
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

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  toggleOpen = () => {
    this.setState({
    open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="filterContainer">
            <SavedFilter />
            <ButtonFilter toggleOpen={this.toggleOpen} />
          </div>
          <DropdownCard open={this.state.open} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

// SearchBar is passing a props for the search_bar which is a function - search
