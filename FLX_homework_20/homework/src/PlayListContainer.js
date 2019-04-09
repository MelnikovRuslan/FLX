import React, { Component } from 'react';

class PlayListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {     
      playListShowButton: ['All', 'Favorite'],
      activeShowButton: 0,
    }
  }

  setActiveShowButton(buttonIndex) {
    this.setState({
      activeShowButton: buttonIndex
    })
  }

  addToFavorite(song) {
    this.props.setFavorite(song)
  }

  songAction(song){
    this.props.setPlaySong(song)
  }


	click() {
		this.setState({active: true});
	}

  render() {
    return <div className="playlist">
      <h1>Playlist</h1>
      {this.state.playListShowButton.map( (button, index) => {
        return <button 
          key={button} 
          className={`${this.state.activeShowButton === index ? 'active-playlist-button' : ''}`}
          onClick={this.setActiveShowButton.bind(this, index)}
          > {button}</button>
      })}
      <ul>
          {this.props.songs && this.state.activeShowButton == 0 && this.props.songs.map( song => {
            return <li key={song.id} className="song">
              <div className = 'start-btn'>
                <button onClick={this.songAction.bind(this, song)} className = 'list-play'>
                  {song.playing ? <i className="material-icons">pause</i> : <i className="material-icons">play_arrow</i>}
                </button>
              </div>
              <div className = 'author'>
                <div className = 'song-title'>{song.title}</div>
                <div className = 'song-author'>{song.author}</div>
              </div>
              <div className="song-favorite">
                <button onClick={this.addToFavorite.bind(this, song)} className = 'favorite'>
                  <i className={`material-icons ${song.favorite ? 'active' : ''}`}>favorite</i>
                </button>
              </div>
            </li>
          })}
          {this.props.songs && this.state.activeShowButton == 1 && this.props.songs.map( song => {
            if(song.favorite) {
            return <li key={song.id} className="song">
              <div>
                <button onClick={this.songAction.bind(this, song)} className = 'list-play'>
                  {song.playing ? <i className="material-icons">pause</i> : <i className="material-icons">play_arrow</i>}
                </button>
              </div>
              <div className = 'author'>
                {song.title}
                {song.author}
              </div>
              <div className="song-favorite">
                <button onClick={this.addToFavorite.bind(this, song)} className = 'favorite'><i className={`material-icons ${song.favorite ? 'active' : ''}`}>favorite</i></button>
              </div>
            </li>
            }
          })}
      </ul>
    </div>
  }
} ;

export default PlayListContainer;