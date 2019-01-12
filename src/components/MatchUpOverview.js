import React from 'react';
import ServerOverview from './ServerOverview';
import MapDetails from './MapDetails';
import store from '../store';

class MatchUpOverview extends React.Component {
    //Look up server match up and assign servers to colours/borderlands

    componentDidMount() {
        store.dispatch({
            type: "FETCH_MATCHUP_DATA",
            payload: fetch("https://api.guildwars2.com/v2/wvw/matches?world=2003")
            .then(response => response.json())
        });
    }

    render() {
        return (
            <div>
                <div className="row-responsive">
                    <ServerOverview serverName={this.props.match.params.serverName} colour="red" score={9999} />
                    <ServerOverview serverName={"Green"} colour="green" score={8888} />
                    <ServerOverview serverName={"Blue"}  colour="blue" score={7777} />
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