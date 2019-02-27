//Hooks = true ;)

import React from 'react';
import Proptypes from 'prop-types';

import KillsTrackerGraph from './KillsTrackerGraph';

export default function KillsTrackerDisplay(props) {
    const { serverName, kills } = props;

    return (
        <div className="killstracker-grid">
            <h4>{`${serverName}: `}</h4>
            <KillsTrackerGraph className="row-fixed killstracker-container" data={kills}/>
        </div>
    )
}

KillsTrackerDisplay.proptypes = {
    serverName: Proptypes.string.isRequired,
    kills: Proptypes.array.isRequired
}