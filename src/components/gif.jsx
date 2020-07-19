import React from 'react';

class Gif extends React.Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
