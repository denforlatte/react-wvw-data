import React from 'react';
import ServerOverview from './ServerOverview';
import MapDetails from './MapDetails';

class MatchUpOverview extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <ServerOverview serverName={this.props.match.params.serverName} colour="red" />
                    <ServerOverview serverName={"Green"} colour="green" />
                    <ServerOverview serverName={"Blue"}  colour="blue" />
                </div>
                <div className="bar"></div>
                <div className="row">
                    <MapDetails mapName="Eternal Battle Grounds" colour="grey" />
                    <MapDetails mapName="Red Borderland" colour="red" />
                    <MapDetails mapName="Green Borderland" colour="green" />
                    <MapDetails mapName="Blue Borderland" colour="blue" />
                </div>
            </div>
        )
    }
}

export default MatchUpOverview;