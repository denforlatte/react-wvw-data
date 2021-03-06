import React from 'react';
import PropTypes from 'prop-types';
import * as serverHelper from '../../../helpers/serverHelper';
import * as analyticsHelper from '../../../helpers/analyticsHelper';

import MapServerScores from './MapServerScores';


class MapOverview extends React.Component {
    render() {
        let mapServerScores = this.compileMapServerScores(this.orderByMapScore());

        return (
            <section className="data-component-card">
                <div className="row-fixed">
                    <h3 className="font-left-align">Map Overview</h3>
                </div>
                <div>
                    {mapServerScores}
                </div>
            </section>
        );
    }
    
    compileMapServerScores(mapScores) {
        const { mapName, servers, activityAnalytics, kills, deaths} = this.props;

        let mapServerScores = [];
        const positions = ["1st", "2nd", "3rd"];
        let counter = 0;

        for (let map in mapScores) {
            let colour = mapScores[map][0];
            
            mapServerScores.push(
                <MapServerScores
                    key={`${mapName}_${colour}`}
                    serverName={serverHelper.getNameByCode(servers[colour])}
                    colour={colour}
                    position={positions[counter++]}
                    score={mapScores[map][1]}
                    ppt={activityAnalytics.currentPPT[colour]}
                    kills={`${analyticsHelper.round(kills[colour]/1000, 1)}k`}
                    deaths={`${analyticsHelper.round(deaths[colour]/1000, 1)}k`}
                    ratio={analyticsHelper.round(kills[colour]/deaths[colour], 2)}
                />
            );
        }

        return mapServerScores;
    }

    orderByMapScore() {
        const { mapScores } = this.props;

        let mapScoresArray = [];
        for (var map in mapScores) {
            mapScoresArray.push([map, mapScores[map]]);
        }
        mapScoresArray.sort((x, y) => y[1] - x[1]);

        return mapScoresArray;
    }
}

MapOverview.propTypes = {
    mapName: PropTypes.string.isRequired,
    servers: PropTypes.object.isRequired,
    mapScores: PropTypes.object.isRequired,
    activityAnalytics: PropTypes.object.isRequired,
    kills: PropTypes.object.isRequired,
    deaths: PropTypes.object.isRequired
}

export default MapOverview;