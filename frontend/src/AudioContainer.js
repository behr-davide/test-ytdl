import React from 'react';
import AudioForm from './AudioForm';
import AudioPlayer from './AudioPlayer';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

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

      listQuery = async () => {
        console.log('listing channels');
        const allChannels = await API.graphql(graphqlOperation(queries.listChannels));
        console.log(JSON.stringify(allChannels));
      }

      createChannel = async () => {
        const channel = {
          isLive: false,
          title: "Home Planet",
          queue: [],
          currentSong: {
            title: "Hope",
            url: "youtube.com/watch?v=AObbki29gpo"
          }
        };

        console.log('creating channel');
        const newChannel = await API.graphql(graphqlOperation(mutations.createChannel, {input: channel}));
        console.log(JSON.stringify(newChannel));
      };

  render() {

    return (

      <div>
        <AudioPlayer song={this.state.song} isPlaying={this.state.isPlaying}/>
        <AudioForm submit={this.handleSubmit} change={this.handleChange}/>
        <button onClick={this.listQuery}>fetch</button>
        <button onClick={this.createChannel}>create</button>
      </div>
    );
  }
}

export default AudioContainer;