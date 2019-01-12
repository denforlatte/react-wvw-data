import React from 'react';
import { connect } from 'react-redux';

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
        var overviews = this.compileServerOverview();

        return (
            <div>
                <div className="row-responsive">
                    {overviews}
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

    compileServerOverview() {
        const { serverOverview } = this.props;
        var serverColours = Object.getOwnPropertyNames(serverOverview);
        var overviews = [];
        var i;

        for (i = 0; i < 3; i++) {
            var colour = serverColours[i];
            var server = serverOverview[colour];

            overviews.push(
                <ServerOverview
                    key={colour}
                    name= {colour}
                    colour={colour}
                    kills={server.kills}
                    deaths={server.deaths}
                    ratio={server.ratio}
                    score={server.skirmishScore}
                    victoryPoints={server.victoryPoints}
                />
            );
        }
        return overviews;
    }
}

const mapStateToProps = function(store) {
    return {
        serverOverview: store.serverOverviewState
    };
}

export default connect(mapStateToProps)(MatchUpOverview);