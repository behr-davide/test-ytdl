import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import AudioContainer from './AudioContainer.js';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Music, together.
        </p>
        <AudioContainer/>
      </header>
    </div>
  );
}

export default App;
