// hooks = true ;)

import React from 'react';
import Proptypes from 'prop-types';

import KillsTrackerBars from './KillsTrackerBars';

export default function KillsTrackerGraph(props) {
    const { data } = props;
    const graphBars = useGraphBars(data);


    return (
        <svg className="killstracker-graph">
            {graphBars}
        </svg>
    )
}

function useGraphBars(data) {
    let dataDiff = [];
    let graphBars = [];
    let highestValue = 20; //Minimum length of y on graph
    let maxBars = 6; //A temporary hardcoded solution to 

    //Create a new array based on the differences between the kills and deaths in data
    for (let i = 1; i < data.length; i++) {
        dataDiff.push(
            [data[i][0] - data[i-1][0], data[i][1] - data[i-1][1]]
        )
    }

    //Find highest value in 2D array "data" and store it as "highestValue"
    for (let i = 0; i < dataDiff.length; i++) {
        if (dataDiff[i][0] > highestValue) {highestValue = dataDiff[i][0]};
        if (dataDiff[i][1] > highestValue) {highestValue = dataDiff[i][1]};
    }
    
    //Find out where to start if there is more data than can be displayed.
    let startingPos = dataDiff.length - maxBars;
    if (startingPos < 0) { startingPos = 0}

    //Format the kills and deaths differences into the KillsTrackerBars svg format
    for (var i = startingPos; i < dataDiff.length; i++) {
        let killsNormalised = dataDiff[i][0] / highestValue * 80;
        let deathsNormalised = dataDiff[i][1] / highestValue * 80;

        graphBars.push(
            <KillsTrackerBars
                key={`GraphBars_${i}`}
                killsWidth={"6%"}
                killsHeight={`${killsNormalised}%`}
                killsXPos={`${2 + 20*(i)}%`}
                killsYPos={`${80 - killsNormalised}%`}
                deathsWidth={"6%"}
                deathsHeight={`${deathsNormalised}%`}
                deathsXPos={`${9 + 20*(i)}%`}
                deathsYPos={`${80 - deathsNormalised}%`}
            />
        )
    }

    return graphBars;
}



KillsTrackerGraph.proptypes = {
    data: Proptypes.array.isRequired,
    showToolTip: Proptypes.func.isRequired
}