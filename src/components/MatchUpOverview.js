import React from 'react';

class MatchUpOverview extends React.Component {
    render() {
        return <div>{this.props.match.params.serverName}</div>;
    }
}

export default MatchUpOverview;