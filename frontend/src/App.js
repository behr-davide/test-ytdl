import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import Header from './Header.js';
import Sider from './Sider.js';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header/>
      <Sider/>
    </div>
  );
}

export default App;
