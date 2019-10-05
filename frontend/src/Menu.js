import React from 'react';
import './Menu.css';
import fav from './fav.svg';

class Menu extends React.Component {
  render() {
    return (
        <div className="Menu">
            <div className="Menu-title">
                Channels
            </div>
            <div className="Menu-item">
                <img src={fav} className="Menu-fav" alt="fav" style={{fill:"#58C88C"}}/>
                Good Faith Radio
            </div>
            <div className="Menu-item">
                <img src={fav} className="Menu-fav" alt="fav" />
                Home Planet
            </div>
            <div className="Menu-item">
                <img src={fav} className="Menu-fav" alt="fav" />
                Reset Presents
            </div>
        </div>
    );
  }
}


export default Menu;