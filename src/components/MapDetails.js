import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MapOverview from './dataPieces/MapOverview/MapOverview';

class MapDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {mapArrayPosition: this.getMapArrayPosition()}
    }

    render() {
        const { mapName, colour, fullAPI } = this.props;

        return (
            <div className={`card card-${colour}`}>
                <div className={`row-fixed ${colour}`}>
                    <h2>{mapName}</h2>
                </div>
                
                <MapOverview
                    mapName={mapName}
                    servers={fullAPI.worlds}
                    mapScores={fullAPI.skirmishes[fullAPI.skirmishes.length-1].map_scores[this.state.mapArrayPosition].scores}
                />
                <div>
                    Testing
                </div>
            </div>
        )
    }

    //A method that takes the colour of this copy of MapDetails, finds it in the array, and saves it to state.
    getMapArrayPosition() {
        const { colour, fullAPI } = this.props;

        if (colour === "grey") {
            return 1;
        } else {
            var i;
            for (i = 0; i < fullAPI.maps.length; i++) {
                if (`${colour}home` === fullAPI.maps[i].type.toLowerCase()) {
                    return i;
                }
            }
        }
        console.warn("Was not able to find map in API.maps: " + colour);
    }
}

MapDetails.propTypes = {
    mapName: PropTypes.string.isRequired,
    colour: PropTypes.string,
    fullAPI: PropTypes.object.isRequired
}

const mapStateToProps = function(store) {
    return {
        fullAPI: store.fullAPIState,
        activityAnalytics: store.activityAnalyticsState
    };
}

export default connect(mapStateToProps)(MapDetails);