//Trying Hooks for the first time!

import React from 'react';
import Proptypes from 'prop-types';
import * as serverHelper from '../../../helpers/serverHelper';

import KillsTrackerDisplay from './KillsTrackerDisplay';

export default function KillsTracker(props) {
    const { servers, kills } = props;
    const killsTrackerDisplays = useKillsTrackerDisplay(servers, kills);

    return (
        <section className="data-component-card card-padding">
                <div className="row-fixed">
                    <h3 className="font-left-align">Kills &amp; Deaths Tracker</h3>
                </div>
                <div>
                    <p className="font-left-align">Watching for kills in 30 second intervals. Hover over bars for exact numbers.</p>
                </div>
                <div>
                    {killsTrackerDisplays}
                </div>
            </section>
    );
}

function useKillsTrackerDisplay(servers, kills) {

    let killsTrackerDisplays = [];
    let serverColours = Object.getOwnPropertyNames(servers);


    let i;
    for (i = 0; i < serverColours.length; i++) {    
        var colour = serverColours[i];
        
        killsTrackerDisplays.push(
            <KillsTrackerDisplay
                key={'KillsTrackerDisplay_' + colour}
                serverName={serverHelper.getNameByCode(servers[colour])}
                kills={kills[colour]}
            />
        )
    }

    return killsTrackerDisplays;
}

KillsTracker.proptypes = {
    kills: Proptypes.object.isRequired
}