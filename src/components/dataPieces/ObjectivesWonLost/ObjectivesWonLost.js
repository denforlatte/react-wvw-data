import React from 'react';
import Proptypes from 'prop-types';
import * as serverHelper from '../../../helpers/serverHelper';

import ObjectivesDisplay from './ObjectivesDisplay';

class ObjectivesWonLost extends React.Component {


    render() {
        const { timeFrame, selectTimeFrame } =this.props;

        let objectivesDisplays = this.compileObjectivesDisplays();
        this.totalObjectivesWonLost();


        //Switch out for a method to do this check.
        let isActive5 = "";
        let isActive30 = "";
        let isActive60 = "";
        if (timeFrame === 300000 ) { isActive5 = "objectives-btn-active" }
        if (timeFrame === 1800000 ) { isActive30 = "objectives-btn-active" }
        if (timeFrame === 3600000 ) { isActive60 = "objectives-btn-active" }

        return (
            <div className="data-component-card card-padding">
                <div className="row-fixed">
                    <h3 className="left-align">Objectives Gained</h3>
                    <button className={`objectives-btn ${isActive5}`} onClick={() => selectTimeFrame(300000)}>&lt;5 mins</button>
                    <button className={`objectives-btn ${isActive30}`} onClick={() => selectTimeFrame(1800000)}>&lt;30 mins</button>
                    <button className={`objectives-btn ${isActive60}`} onClick={() => selectTimeFrame(3600000)}>&lt;60 mins</button>
                </div>
                <div>
                    {objectivesDisplays}
                </div>
            </div>
        );
    }

    compileObjectivesDisplays() {
        const { servers, mapName } = this.props;

        let objectivesDisplays = [];
        let serverColours = Object.getOwnPropertyNames(servers);
        let objectivesWonLost = this.totalObjectivesWonLost();
        let stonemist = false;

        if (mapName === "Eternal Battlegrounds")
        stonemist = true;

        let i;
        for (i = 0; i < serverColours.length; i++) {
            let server = serverColours[i];
            let objectiveColours = {camp: "", tower: "", keep: "", castle: ""};

            for (var objective in objectivesWonLost[server]) {
                if (objectivesWonLost[server][objective] > 0) {
                    objectiveColours[objective] = server;
                }
                else {
                    objectiveColours[objective] = "grey";
                }
            }

            objectivesDisplays.push(
                <ObjectivesDisplay
                    key={`${this.props.mapName}_${server}`}
                    serverName={serverHelper.getNameByCode(servers[server])}
                    won={objectivesWonLost[server]}
                    objectiveColours={objectiveColours}
                    stonemist={stonemist}
                />
            )
        }

        return objectivesDisplays;
    }

    totalObjectivesWonLost() {
        const { objectives, timeFrame } = this.props;

        //Blank objectives won object
        let objectivesWonLost = {
            red: {
                camp: 0,
                tower: 0,
                keep: 0,
                castle: 0
            },
            blue: {
                camp: 0,
                tower: 0,
                keep: 0,
                castle: 0
            },
            green: {
                camp: 0,
                tower: 0,
                keep: 0,
                castle: 0
            }
        }

        //Loop through all objectives, check if they were captured in the last five minutes, then increment the value in the object above.
        var currentTime = new Date();

        for (var objective in objectives) {
            let x = objectives[objective];
            let last_flipped = currentTime - new Date(x.last_flipped);

            if ( last_flipped < timeFrame ) {
                let owner = x.owner;
                let type = x.type;

                objectivesWonLost[owner.toLowerCase()][type.toLowerCase()]++;
            }
        }

        return objectivesWonLost;
    }
}

ObjectivesWonLost.proptypes = {
    mapName: Proptypes.string.isRequired,
    servers: Proptypes.object.isRequired,
    objectives: Proptypes.object.isRequired,
    timeFrame: Proptypes.number.isRequired,
    selectTimeFrame: Proptypes.func.isRequired
}

export default ObjectivesWonLost;