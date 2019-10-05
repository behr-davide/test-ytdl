import React from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component {
  render() {
    return (
        <div className="Header-bar">
            <img src={logo} className="Header-logo" alt="logo" />
        </div>
    );
  }
}


export default Header;