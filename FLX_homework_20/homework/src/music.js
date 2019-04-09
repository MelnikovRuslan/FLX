 import React, { Component } from 'react';

/*connected the audio file and image locally*/

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
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

  render(){
    let {isLoaded, items} = this.state;
      if(!isLoaded){
          return <div>Loading...</div>
      } else {
        return(
            <div className = 'play-list'>
                <h2>Playlist</h2>
                    {items.map(item => (
                        <div  key={item.id}>
                            <audio controls> 
                                <source src="https://firebasestorage.googleapis.com/v0/b/expensify-e44cc.appspot.com/o/Für Elise.mp3?alt=media&token=29e24940-bee1-44cc-9c18-42644796feb1" type="audio/ogg"></source>
                                <source src="https://firebasestorage.googleapis.com/v0/b/expensify-e44cc.appspot.com/o/Für Elise.mp3?alt=media&token=29e24940-bee1-44cc-9c18-42644796feb1" type="audio/mpeg"></source>
                            </audio>
                        </div>
                    ))}
            </div>
        )
    }
  }
}
export default Music;