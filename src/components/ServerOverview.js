import React from 'react';

class ServerOverview extends React.Component {
    render() {
        return (
            <div>{this.props.serverName}</div>
        )
    }
}

export default ServerOverview;