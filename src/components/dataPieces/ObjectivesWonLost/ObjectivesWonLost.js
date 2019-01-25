import React from 'react';
import Proptypes from 'prop-types';

import ObjectivesDisplay from './ObjectivesDisplay';

class ObjectivesWonLost extends React.Component {
    render() {
        let objectivesDisplays = this.compileObjectivesDisplays();
        this.totalObjectivesWonLost();

        return (
            <div>
                {objectivesDisplays}
            </div>
        );
    }

    compileObjectivesDisplays() {
        let objectivesDisplays = [];
        let serverColours = Object.getOwnPropertyNames(this.props.servers);

        let i;
        for (i = 0; i < serverColours.length; i++) {
            objectivesDisplays.push(
                <ObjectivesDisplay
                    key={`${this.props.mapName}_${serverColours[i]}`}
                    server={serverColours[i]}
                />
            )
        }

        return objectivesDisplays;
    }

    totalObjectivesWonLost() {
        const { objectives } = this.props;

        //Relocate to state
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

        //Could make the following toggleable
        var fiveMinutes = 300000;
        var thirtyMinutes = 1800000;
        var oneHour = 3600000;

        for (var objective in objectives) {
            let x = objectives[objective];
            let last_flipped = currentTime - new Date(x.last_flipped);

            if ( last_flipped < oneHour ) {
                let owner = x.owner;
                let type = x.type;

                objectivesWonLost[owner.toLowerCase()][type.toLowerCase()]++;
            }
        }
    }
}

ObjectivesWonLost.proptypes = {
    mapName: Proptypes.string.isRequired,
    servers: Proptypes.object.isRequired,
    objectives: Proptypes.object.isRequired
}

export default ObjectivesWonLost;