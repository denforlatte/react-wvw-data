import React from 'react';
import Proptypes from 'prop-types';

export default function KillsTrackerBars(props) {
    const { kills, killsWidth, killsHeight, killsXPos, killsYPos } = props;
    const { deaths, deathsWidth, deathsHeight, deathsXPos, deathsYPos } = props;

    return (
        <g>
            <rect width={killsWidth} height={killsHeight} x={killsXPos} y={killsYPos}>
                <title>Kills: {kills}</title>
            </rect>
            <rect width={deathsWidth} height={deathsHeight} x={deathsXPos} y={deathsYPos}>
                <title>Deaths: {deaths}</title>
            </rect>
        </g>
    )
}

KillsTrackerBars.proptypes = {
    kills: Proptypes.number.isRequired,
    killsWidth: Proptypes.string.isRequired,
    killsHeight: Proptypes.string.isRequired,
    killsXPos: Proptypes.string.isRequired,
    killsYPos: Proptypes.string.isRequired,
    deaths: Proptypes.number.isRequired,
    deathsWidth: Proptypes.string.isRequired,
    deathsHeight: Proptypes.string.isRequired,
    deathsXPos: Proptypes.string.isRequired,
    deathsYPos: Proptypes.string.isRequired
}