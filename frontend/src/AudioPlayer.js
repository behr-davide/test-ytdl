import React from 'react'

class AudioPlayer extends React.Component {

  componentWillReceiveProps(props){
    console.log(this.props.isPlaying) //this will get whenever state changes after initial render
 }

  render() {
    var server = 'http://localhost:7331/';

    return (

      <div>
        <audio ref="audio_tag" src={server + this.props.song} controls autoPlay={this.props.isPlaying}/>
      </div>
    );
  }
}

export default AudioPlayer;