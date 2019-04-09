import React, { Component } from 'react';
import PlayListContainer from './PlayListContainer';
import NowPlaying from './NowPlaying';
import { render } from 'react-dom';

// Entry point for styles
import './scss/index.scss';

// Get the root node
const rootNode = document.querySelector('#root');

// Entry point for the application
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSong: null
    }
  }
  componentDidMount() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          isLoaded : true,
          items:data,
        });
    });
  }

  setFavorite(song) {
    this.setState( prevState => ({
      items: prevState.items.map( item => {
        if(item.id == song.id) {
          item.favorite = !item.favorite;
          return item;
        } else {
          return item;
        }
      })
    }))
  }

  setPlaySong(song) {
    this.setState( prevState => ({
      items: prevState.items.map( item => {
        if(item.id == song.id) {
          song.playing = !song.playing
          return item;
        } else {
          item.playing = false
          return item;
        }
      }),
      activeSongId: song.id
    }))    
    this.setState({
      activeSong: song
    })
  }

  prevSong() {
    console.log('prev song')
    if(this.state.activeSongId == 1){
      this.setPlaySong(this.state.items[this.state.items.length-1])
    } else {
      this.setPlaySong(this.state.items[this.state.activeSongId-2])
    }
  }

  nextSong() {
    console.log('next song')
    if(this.state.activeSongId == this.state.items.length){
      this.setPlaySong(this.state.items[0])
    } else {
      this.setPlaySong(this.state.items[this.state.activeSongId])
    }
  }

  render() {    
    return <div className="app">
      <NowPlaying 
        activeSong={this.state.activeSong} 
        setPlaySong={this.setPlaySong.bind(this)}
        prevSong={this.prevSong.bind(this)}
        nextSong={this.nextSong.bind(this)}/>
      <PlayListContainer 
        setPlaySong={this.setPlaySong.bind(this)} 
        setFavorite={this.setFavorite.bind(this)} 
        songs={this.state.items && this.state.items} />
    </div>
  }
} ;

render(
  <App />,
  rootNode,
);
