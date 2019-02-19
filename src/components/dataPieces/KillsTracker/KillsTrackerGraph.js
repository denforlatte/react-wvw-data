// hooks = true ;)

import React from 'react';
import Proptypes from 'prop-types';

export default function KillsTrackerGraph(props) {
    const { data } = props;

    let width = "6%";


    return (
        <svg className="killstracker-graph">
            <g>
                <rect width={width} height={data[0][0]} x="2%" y="50%"/>
                <rect width={width} height={data[0][1]} x="9%" y="20%"/>
            </g>
            <g>
                <rect width={width} height="50%" x="22%" y="50%"/>
                <rect width={width} height="100%" x="29%" y="0%"/>
            </g>
            <g>
                <rect width={width} height="50%" x="42%" y="50%"/>
                <rect width={width} height="80%" x="49%" y="20%"/>
            </g>
            <g>
                <rect width={width} height="50%" x="62%" y="50%"/>
                <rect width={width} height="80%" x="69%" y="20%"/>
            </g>
            <g>
                <rect width={width} height="50%" x="82%" y="50%"/>
                <rect width={width} height="80%" x="89%" y="20%"/>
            </g>
        </svg>
    )
}

KillsTrackerGraph.proptypes = {
    data: Proptypes.array.isRequired,
    showToolTip: Proptypes.func.isRequired
}