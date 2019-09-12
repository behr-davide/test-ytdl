import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      request: '',
      nowPlaying: 'QH2-TGUlwu4',
      isPlaying: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({request: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    this.setState({nowPlaying: this.state.request});
    this.setState({isGay: true});
    alert('Now Playing: ' + this.state.nowPlaying);
    event.preventDefault();
  }

  render() {
    var server = 'http://localhost:7331/';

    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.request} onChange={this.handleChange}></input>
          <button type="submit" value="Submit" >Submit</button>
        </form>
        <audio ref="audio_tag" src={server + this.state.nowPlaying} controls autoPlay={this.state.isPlaying}/>
      </div>
    );
  }
}

export default AudioPlayer;