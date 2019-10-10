import React from 'react';
import './App.css';
import API from "@aws-amplify/api";
import Amplify from '@aws-amplify/core';
import PubSub from '@aws-amplify/pubsub';
import Header from './Header.js';
import Sider from './Sider.js';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig);
PubSub.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header/>
      <Sider/>
    </div>
  );
}

export default App;
