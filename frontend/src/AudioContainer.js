import React from 'react';
import AudioForm from './AudioForm';
import AudioPlayer from './AudioPlayer';

class AudioContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          song: 'QH2-TGUlwu4',
          isPlaying: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
          console.log(e.target.value);
          this.setState({song: e.target.value});
      }
    
      handleSubmit(e) {
          this.setState({isPlaying: true});
          e.preventDefault();
      }


  render() {

    return (

      <div>
        <AudioPlayer song={this.state.song} isPlaying={this.state.isPlaying}/>
        <AudioForm submit={this.handleSubmit} change={this.handleChange}/>
      </div>
    );
  }
}

export default AudioContainer;