import React from 'react';
import Proptypes from 'prop-types';
import * as serverHelper from '../../../helpers/serverHelper';

import ObjectivesDisplay from './ObjectivesDisplay';

class ObjectivesWonLost extends React.Component {


    render() {
        const { timeFrame, selectTimeFrame } =this.props;

        let objectivesDisplays = this.compileObjectivesDisplays();
        this.totalObjectivesWonLost();

        return (
            <div className="data-component-card card-padding">
                <div className="row-fixed">
                    <h3 className="left-align">Objectives Gained</h3>
                    <button className={`objectives-btn ${this.checkIsActive(300000)}`} onClick={() => selectTimeFrame(300000)}>&lt;5 mins</button>
                    <button className={`objectives-btn ${this.checkIsActive(1800000)}`} onClick={() => selectTimeFrame(1800000)}>&lt;30 mins</button>
                    <button className={`objectives-btn ${this.checkIsActive(3600000)}`} onClick={() => selectTimeFrame(3600000)}>&lt;60 mins</button>
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

    //If the time equals the currently selected time, add CSS to show the button as active
    checkIsActive(time) {
        return (time === this.props.timeFrame ? "objectives-btn-active" : "");
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