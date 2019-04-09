import React, { Component } from 'react';
import mp3File from './mozartSong.mp3'
import albumCover from './mozartImg.jpg'

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.myPlayer = React.createRef();

    this.state = {      
      progress: 0
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.myPlayer.current){
      if(prevProps.activeSong && prevProps.activeSong.id === this.props.activeSong.id){
        if(this.props.activeSong.playing){
          this.myPlayer.current.play()
        } else {
          this.myPlayer.current.pause()  
        }
        
      } else {
        if(this.myPlayer.current) {
          this.myPlayer.current.currentTime = 0;
        }
      }
      
      setInterval(() => {
        this.setState({
          progress: (this.myPlayer.current.currentTime / this.myPlayer.current.duration) * 100
        })
      }, 1000)
    }
  }
  playStopSong(){
    if(this.props.activeSong.playing){
      this.props.setPlaySong(this.props.activeSong)
      this.myPlayer.current.pause()  
    } else {
      this.myPlayer.current.play()
      this.props.setPlaySong(this.props.activeSong)
    }
  }
  render() {
    return <div className="now-playing">
      <h1>Now Playing</h1>
      {
        this.props.activeSong && 
        <div className = 'player'>
          <img src={albumCover} alt="mozart"/>

          <div className = 'song-info'>
            <p className='song-title'>{this.props.activeSong.title}</p>
            <p>by {this.props.activeSong.author}</p>
          </div>

          <div className = 'controls'>
            <div className = 'bar'>
              <div style={{width: this.state.progress ? this.state.progress + '%' : '0%'}} className="progress"></div>
            </div>
            <div className = 'control-btns'>
              <button onClick={this.props.prevSong}>
                <i className="material-icons">skip_previous</i>
              </button>
              <button onClick={this.playStopSong.bind(this)} className = 'play-btn'>
                {this.props.activeSong.playing ? 
                  <i className="material-icons">pause</i> : <i className="material-icons">play_arrow</i>
                }
              </button>
              <button onClick={this.props.nextSong}>
                <i className="material-icons">skip_next</i>
              </button>
            </div>
          </div>

          <audio ref={this.myPlayer}>
            <source src={mp3File} type="audio/ogg"></source>
            <source src={mp3File} type="audio/mpeg"></source>
          </audio>
        </div>
      }
    </div>
  }
} ;

export default NowPlaying;