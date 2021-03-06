import React from 'react';
import './Sider.css';
import ChannelListItem from './ChannelListItem.js'
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            currentChannel: null
        };

        this.setCurrentChannel = this.setCurrentChannel.bind(this);
    }

    componentDidMount(){
        this.listQuery();
        this.subscribeToNewChannels();
    }

    listQuery = async () => {
        const allChannels = await API.graphql(graphqlOperation(queries.listChannels));
        this.setState({channels: allChannels.data.listChannels.items})
    }

    setCurrentChannel(channel) {
        this.setState({currentChannel: channel});
    }

    subscribeToNewChannels() {
        const subscription = API.graphql(
            graphqlOperation(subscriptions.onCreateChannel)
        );
        subscription.subscribe({
            next: (data) => {
                const newChannelList = this.state.channels.concat(data.value.data.onCreateChannel);
                this.setState({ channels: newChannelList })
            }
        });
    }
      
    render() {
        return (
            <div className="Sider">
                <div className="Sider-title">
                    Channels
                </div>
                {
                    this.state.channels.map((channel, id) => {
                        return (
                            <div key={id} onClick={this.setCurrentChannel.bind(this, channel)}>
                            <ChannelListItem title={channel.title} isActive={this.state.currentChannel != null && channel.id === this.state.currentChannel.id}/>
                            </div>
                        )
                    })
                }
                {this.state.currentChannel != null &&
                    <div className="Sider-title">
                        {this.state.currentChannel.title}
                    </div>
                }
            </div>
        );
    }
}

export default Sider;