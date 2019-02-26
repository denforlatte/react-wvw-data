// hooks = true ;)

import React, { useState } from 'react';
import Proptypes from 'prop-types';

import KillsTrackerBars from './KillsTrackerBars';
import KillsTrackerGraphXAxis from './KillsTrackerGraphXAxis';

export default function KillsTrackerGraph(props) {
    const [ highestValue, setHighestValue ] = useState(10);
    const { data } = props;
    const graphBars = useGraphBars(data, highestValue, setHighestValue);
    const timestampsThirty = ["-2m30", "-2", "-1m30", "-1m", "-30s", "0s"]
    const timestampsXPos = [10, 27, 45, 63, 82, 99];
    const timestamps = useGraphTimestamps(graphBars.length, timestampsXPos, timestampsThirty);


    return (
        <svg className="killstracker-graph">
            <g className="graph-axis-tags">
                <rect width="8px" height="1px" x="18px" y="75%"/>
                <text x="6px" y="80%">0</text>
                <rect width="8px" height="1px" x="18px" y="1px"/>
                <text x="0%" y="14%">{highestValue}</text>
            </g>
            {graphBars}
            <g>
                {timestamps}
            </g>
        </svg>
    )
}

function useGraphBars(data, highestValue, setHighestValue) {
    let dataDiff = [];
    let graphBars = [];
    let maxBars = 5; //A temporary hardcoded solution to 
    
    //Find out where to start if there is more data than can be displayed.
    let startingPos = data.length - maxBars;
    if (startingPos < 1) { startingPos = 1 }

    //Create a new array based on the differences between the kills and deaths in data
    for (let i = startingPos; i < data.length; i++) {
        dataDiff.push(
            [data[i][0] - data[i-1][0], data[i][1] - data[i-1][1]]
        )
    }

    //Find highest value in 2D array "data" and store it as "highestValue"
    for (let i = 0; i < dataDiff.length; i++) {
        if (dataDiff[i][0] > highestValue) {setHighestValue(dataDiff[i][0])};
        if (dataDiff[i][1] > highestValue) {setHighestValue(dataDiff[i][1])};
    }

    //Format the kills and deaths differences into the KillsTrackerBars svg format
    for (var i = 0; i < dataDiff.length; i++) {
        //Convert the difference to a percentage based on the highest difference for scale.
        let killsNormalised = dataDiff[i][0] / highestValue * 80;
        let deathsNormalised = dataDiff[i][1] / highestValue * 80;

        //Change 0s to 1s to show a thin bar on the graph.
        if (killsNormalised === 0 ) {killsNormalised = 1};
        if (deathsNormalised === 0) {deathsNormalised = 1};

        graphBars.push(
            <KillsTrackerBars
                key={`GraphBars_${i}`}
                kills={dataDiff[i][0]}
                killsWidth={"6%"}
                killsHeight={`${killsNormalised}%`}
                killsXPos={`${12 + 18*(i)}%`}
                killsYPos={`${75 - killsNormalised}%`}
                deaths={dataDiff[i][1]}
                deathsWidth={"6%"}
                deathsHeight={`${deathsNormalised}%`}
                deathsXPos={`${19 + 18*(i)}%`}
                deathsYPos={`${75 - deathsNormalised}%`}
            />
        )
    }

    return graphBars;
}

function useGraphTimestamps (numberOfIntervals, timestampsXPos, timestampsThirty) {
    let timestamps = [];
    let times = [];

    
    for (let i = 5 - numberOfIntervals; i < 6; i++) {
        times.push(timestampsThirty[i]);
    }

    for (let i = times.length; i < 6; i++) {
        times.push("");
    }

    for (let i = 0; i < 6; i++) {
        timestamps.push(
            <KillsTrackerGraphXAxis 
                key={"axis_stamp_" + i}
                xPos={timestampsXPos[i]}
                time={times[i]}
            />
        )
    }

    return timestamps;
}



KillsTrackerGraph.proptypes = {
    data: Proptypes.array.isRequired,
    showToolTip: Proptypes.func.isRequired
}