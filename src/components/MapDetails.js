import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as serverHelper from '../helpers/serverHelper';

import MapOverview from './dataPieces/MapOverview/MapOverview';
import ObjectivesWonLost from './dataPieces/ObjectivesWonLost/ObjectivesWonLost';
import KillsTracker from './dataPieces/KillsTracker/KillsTracker';

class MapDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {mapArrayPosition: serverHelper.getMapArrayPosition(this.props.colour, this.props.fullAPI.maps)}
    }

    render() {
        const { mapName, colour, fullAPI, activityAnalytics, timeFrame, selectTimeFrame } = this.props;
        const { mapArrayPosition } = this.state;

        return (
            <div className={`card card-${colour}`}>
                <div className={`row-fixed ${colour}`}>
                    <h2>{mapName}</h2>
                </div>
                <MapOverview
                    mapName={mapName}
                    servers={fullAPI.worlds}
                    mapScores={fullAPI.skirmishes[fullAPI.skirmishes.length-1].map_scores[mapArrayPosition].scores}
                    activityAnalytics={activityAnalytics}
                    kills={fullAPI.maps[mapArrayPosition].kills}
                    deaths={fullAPI.maps[mapArrayPosition].deaths}
                />
                <ObjectivesWonLost
                    mapName={mapName}
                    servers={fullAPI.worlds}
                    objectives={fullAPI.maps[mapArrayPosition].objectives}
                    timeFrame={timeFrame}
                    selectTimeFrame={selectTimeFrame}
                />
                <KillsTracker
                    servers={fullAPI.worlds}
                    kills={activityAnalytics.kd}
                />
            </div>
        )
    }

    checkMapArrayPosition() {
        let mapArrayPosition = serverHelper.getMapArrayPosition(this.props.colour, this.props.fullAPI.maps)
        if (this.state.mapArrayPosition !== mapArrayPosition) {
            this.setState(mapArrayPosition);
        }
    }
}

MapDetails.propTypes = {
    mapName: PropTypes.string.isRequired,
    colour: PropTypes.string,
    fullAPI: PropTypes.object.isRequired,
    activityAnalytics: PropTypes.object.isRequired,
    timeFrame: PropTypes.number.isRequired,
    selectTimeFrame: PropTypes.func.isRequired
}

const mapStateToProps = function(store) {
    return {
        fullAPI: store.fullAPIState
    };
}

export default connect(mapStateToProps)(MapDetails);