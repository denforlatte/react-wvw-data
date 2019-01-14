import React from 'react';
import { connect } from 'react-redux';

import * as serverHelper from '../helpers/serverHelper';
import * as analyticsHelper from '../helpers/analyticsHelper';

import Header from '../components/layouts/Header';
import ServerOverview from './ServerOverview';
import MapDetails from './MapDetails';
import store from '../store';

//Look up server match up and assign servers to colours/borderlands
class MatchUpOverview extends React.Component {
    //Needed?
    constructor(props) {
        super(props)
        this.state = {
            currentServer: ''
        }
    }

    componentDidMount() {
        var serverCode = serverHelper.getCodeByName(this.props.match.params.serverName);

        this.updateMatchupData(serverCode);
        this.setState({currentServer: serverCode});
    }

    componentDidUpdate(nextProps, nextState) {
        var serverCode = serverHelper.getCodeByName(this.props.match.params.serverName);
        if (serverCode !== this.state.currentServer){
            this.setState({currentServer: serverCode});
            console.log(this.state.currentServer);
            this.updateMatchupData(serverCode);
        }
        return true;
    }

    //Rough draft of a render statement while details are still being ironed out
    render() {
        var overviews = this.compileServerOverviews();

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

    updateMatchupData(serverCode) {
        store.dispatch({
            type: "FETCH_MATCHUP_DATA",
            payload: fetch(`https://api.guildwars2.com/v2/wvw/matches?world=${serverCode}`)
            .then(response => response.json())
        });
    }

    //Loop through the servers assigning values from store to props for <ServerOverview /> to display
    compileServerOverviews() {
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
                    name={server.name}
                    colour={colour}
                    ppt={server.ppt}
                    kills={analyticsHelper.beautifyNumber(server.kills)}
                    deaths={analyticsHelper.beautifyNumber(server.deaths)}
                    ratio={analyticsHelper.beautifyNumber(server.ratio)}
                    score={analyticsHelper.beautifyNumber(server.skirmishScore)}
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