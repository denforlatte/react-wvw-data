import React from 'react';
import PropTypes from 'prop-types';

import MapServerScores from './MapServerScores';

import * as serverHelper from '../../../helpers/serverHelper';

class MapOverview extends React.Component {
    render() {
        let mapServerScores = this.compileMapServerScores(this.orderByMapScore());

        return (
            <div className="data-component-card">
                <div className="row-fixed">
                    <h3 className="left-align">Map Overview</h3>
                </div>
                <div>
                    {mapServerScores}
                </div>
            </div>
        );
    }
    
    compileMapServerScores(mapScores) {
        const { mapName, servers } = this.props;

        let mapServerScores = [];

        for (let map in mapScores) {
            mapServerScores.push(
                <MapServerScores
                    key={`${mapName}_${mapScores[map][0]}`}
                    serverName={serverHelper.getNameByCode(servers[mapScores[map][0]])}
                    colour={mapScores[map][0]}
                    score={mapScores[map][1]}
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
    mapScores: PropTypes.object.isRequired
}

export default MapOverview;