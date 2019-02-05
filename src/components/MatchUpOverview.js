import React from 'react';
import { connect } from 'react-redux';

import * as serverHelper from '../helpers/serverHelper';
import * as analyticsHelper from '../helpers/analyticsHelper';
import ApiService from '../services/apiService';

import ServerOverview from './ServerOverview';
import MapDetails from './MapDetails';

//Look up server match up and assign servers to colours/borderlands
class MatchUpOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentServer: '',
            timeFrame: 3600000
        }

        this.selectTimeFrame = this.selectTimeFrame.bind(this);
    }

    //Get the code of the desired server, fetch the match up data, store server code in state.
    componentDidMount() {
        var serverCode = serverHelper.getCodeByName(this.props.match.params.serverName);

        //Create/get instance of apiService and start fetching the API
        var apiService = ApiService.getInstance();
        apiService.startFetchingAPI(serverCode);

        this.setState({currentServer: serverCode});
    }

    //Fetch new match up data if a new sever is selected
    componentDidUpdate() {
        var serverCode = serverHelper.getCodeByName(this.props.match.params.serverName);

        if (serverCode !== this.state.currentServer){

            this.setState({currentServer: serverCode});

            var apiService = ApiService.getInstance();
            apiService.stopFetchingAPI();
            apiService.startFetchingAPI(serverCode);

        }
    }

    //Stop fetching the API (also resets the selected server in store to '')
    componentWillUnmount() {
        var apiService = ApiService.getInstance();
            apiService.stopFetchingAPI();
    }

    //Rough draft of a render statement while details are still being ironed out
    render() {
        const { displayState } = this.props;

        //Show loading
        if (!displayState.firstFetchSuccess) {
            return <p>Loading...</p>
        }

        //Data has returned. Full display.
        var serverOverviews = this.compileServerOverviews();
        var mapDetails = this.compileMapDetails();

        return (
            <div>
                <div className="row-responsive-3">
                    {serverOverviews}
                </div>
                <div className="bar"></div>
                <div className="row-responsive-4">
                    {mapDetails}
                </div>
            </div>
        )
    }

    //Loop through the servers assigning values from store to props for <ServerOverview /> to display
    compileServerOverviews() {
        const { fullAPI, serverOverview, activityAnalytics } = this.props;
        var serverColours = Object.getOwnPropertyNames(fullAPI.worlds);
        var overviews = [];

        var i;
        for (i = 0; i < serverColours.length; i++) {
            var colour = serverColours[i];
            var server = serverOverview[colour];
            
            //Add up PPT from maps
            var j;
            server.ppt = 0;
            var maps = Object.getOwnPropertyNames(activityAnalytics);
            for (j = 0; j < maps.length; j++) {
                server.ppt += activityAnalytics[maps[j]].currentPPT[colour];
            }

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

    compileMapDetails() {
        const { fullAPI, activityAnalytics } = this.props;
        const { timeFrame } = this.state;
        var mapDetails = [];

        
        mapDetails.push(
            <MapDetails 
                key="0" 
                mapName="Eternal Battlegrounds" 
                colour="grey"
                activityAnalytics={activityAnalytics.eternalBattlegrounds}
                timeFrame={timeFrame}
                selectTimeFrame={this.selectTimeFrame}
            />
        );

        
        let serverColours = Object.getOwnPropertyNames(fullAPI.worlds);
        let i;
        for (i = 0; i < serverColours.length; i++) {
            let colour = serverColours[i];

            mapDetails.push(
                <MapDetails 
                    key={fullAPI.worlds[colour]} 
                    mapName={`${serverHelper.getNameByCode(fullAPI.worlds[colour])} Borderland`} 
                    colour={colour}
                    activityAnalytics={activityAnalytics[`${colour}Borderland`]}
                    timeFrame={timeFrame}
                    selectTimeFrame={this.selectTimeFrame}
                />
            );
        }      
        

        return mapDetails;
    }

    selectTimeFrame(timeFrame) {
        this.setState({timeFrame});
    }
}

const mapStateToProps = function(store) {
    return {
        displayState: store.displayState,
        fullAPI: store.fullAPIState,
        serverOverview: store.serverOverviewState,
        activityAnalytics: store.activityAnalyticsState
    };
}

export default connect(mapStateToProps)(MatchUpOverview);