import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import Header from './Header.js';
import Menu from './Menu.js';
import AudioContainer from './AudioContainer.js';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
    </div>
  );
}

export default App;
