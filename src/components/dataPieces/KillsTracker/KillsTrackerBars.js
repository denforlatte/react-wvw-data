import React from 'react';
import Proptypes from 'prop-types';

export default function KillsTrackerBars(props) {
    const { killsWidth, killsHeight, killsXPos, killsYPos } = props;
    const { deathsWidth, deathsHeight, deathsXPos, deathsYPos } = props;
    
    console.log("this");

    return (
        <g>
            <rect width={killsWidth} height={killsHeight} x={killsXPos} y={killsYPos}/>
            <rect width={deathsWidth} height={deathsHeight} x={deathsXPos} y={deathsYPos}/>
        </g>
    )
}

KillsTrackerBars.proptypes = {
    killsWidth: Proptypes.string.isRequired,
    killsHeight: Proptypes.string.isRequired,
    killsXPos: Proptypes.string.isRequired,
    killsYPos: Proptypes.string.isRequired,
    deathsWidth: Proptypes.string.isRequired,
    deathsHeight: Proptypes.string.isRequired,
    deathsXPos: Proptypes.string.isRequired,
    deathsYPos: Proptypes.string.isRequired
}