import React from 'react';
import Proptypes from 'prop-types';

export default function KillsTrackerGraphXAxis(props) {
    const { xPos, time } = props;

    return (
        <g className="graph-axis-tags">
            <rect width="1px" height="6%" x={`${xPos}%`} y="75%"/>
            <text x={`${xPos-4}%`} y="100%">{time}</text>
        </g>
    )
}

KillsTrackerGraphXAxis.proptypes = {
    xPos: Proptypes.number.isRequired,
    time: Proptypes.string
}