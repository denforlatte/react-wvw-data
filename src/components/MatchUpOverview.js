import React from 'react';
import ServerOverview from './ServerOverview';

class MatchUpOverview extends React.Component {
    render() {
        return <ServerOverview serverName={this.props.match.params.serverName} />;
    }
}

export default MatchUpOverview;