import React from 'react';

class Gif extends React.Component {
  render () {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="gif" className="gif"/>
    );
  }
}

export default Gif;
