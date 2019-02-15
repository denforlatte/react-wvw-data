//Hooks = true ;)

import React from 'react';
import Proptypes from 'prop-types';

export default function KillsTrackerDisplay(props) {
    const { serverName } = props;

    return (
        <div className="killstracker-grid">
                <h4>{`${serverName}: `}</h4>
                <div className="row-fixed killstracker-container">
                    <p>x</p>
                </div>
            </div>
    )
}

KillsTrackerDisplay.proptypes = {
    kills: Proptypes.array.isRequired
}