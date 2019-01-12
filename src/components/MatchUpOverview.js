import React from 'react';
import ServerOverview from './ServerOverview';
import MapDetails from './MapDetails';

class MatchUpOverview extends React.Component {
    //Look up server match up and assign servers to colours/borderlands

    render() {
        return (
            <div>
                <div className="row-responsive">
                    <ServerOverview serverName={this.props.match.params.serverName} colour="red" />
                    <ServerOverview serverName={"Green"} colour="green" />
                    <ServerOverview serverName={"Blue"}  colour="blue" />
                </div>
                <div className="bar"></div>
                <div className="row-responsive">
                    <MapDetails mapName="Eternal Battlegrounds" colour="grey" />
                    <MapDetails mapName="Red Borderland" colour="red" />
                    <MapDetails mapName="Green Borderland" colour="green" />
                    <MapDetails mapName="Blue Borderland" colour="blue" />
                </div>
            </div>
        )
    }
}

export default MatchUpOverview;