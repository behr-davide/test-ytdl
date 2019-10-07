import React from 'react';
import './ChannelListItem.css';
import fav from './fav.svg';
import favSelected from './fav-selected.svg';

class ChannelListItem extends React.Component {
      
    render() {
        return (
            <div>
                {
                this.props.isActive === false &&
                <li className="Menu-item">
                    <img src={fav} className="Menu-icon" alt="favorite"/>
                    {this.props.title}
                </li>
                }
                {
                    this.props.isActive === true &&
                    <li className="Menu-item-selected">
                        <img src={favSelected} className="Menu-icon" alt="favorite"/>
                        {this.props.title}
                    </li>
                }
            </div>
        );
    }
}

export default ChannelListItem;