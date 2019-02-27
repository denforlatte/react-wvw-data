import * as analyticsHelper from '../helpers/analyticsHelper';

const activityAnalyticsStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            //Find the maps in the array and save them for easy access.
            let ebgMap = action.payload.maps.find(map => {return map.type === "Center"});
            let redMap = action.payload.maps.find(map => {return map.type === "RedHome"});
            let greenMap = action.payload.maps.find(map => {return map.type === "GreenHome"});
            let blueMap = action.payload.maps.find(map => {return map.type === "BlueHome"});

            var calculatedPPT = analyticsHelper.calculatePPT(action.payload.maps);
            return {
                ...state,
                eternalBattlegrounds: {
                    ...state.eternalBattlegrounds,
                    currentPPT: calculatedPPT.eternalBattlegrounds.currentPPT,
                    kd: {
                        ...state.eternalBattlegrounds.kd,
                        red: [...state.eternalBattlegrounds.kd.red, [ebgMap.kills.red, ebgMap.deaths.red]],
                        green: [...state.eternalBattlegrounds.kd.green, [ebgMap.kills.green, ebgMap.deaths.green]],
                        blue: [...state.eternalBattlegrounds.kd.blue, [ebgMap.kills.blue, ebgMap.deaths.blue]]
                    }
                },
                redBorderland: {
                    ...state.redBorderland,
                    currentPPT: calculatedPPT.redBorderland.currentPPT,
                    kd: {
                        ...state.redBorderland.kd,
                        red: [...state.redBorderland.kd.red, [redMap.kills.red, redMap.deaths.red]],
                        green: [...state.redBorderland.kd.green, [redMap.kills.green, redMap.deaths.green]],
                        blue: [...state.redBorderland.kd.blue, [redMap.kills.blue, redMap.deaths.blue]]
                    }
                },
                greenBorderland: {
                    ...state.greenBorderland,
                    currentPPT: calculatedPPT.greenBorderland.currentPPT,
                    kd: {
                        ...state.greenBorderland.kd,
                        red: [...state.greenBorderland.kd.red, [greenMap.kills.red, greenMap.deaths.red]],
                        green: [...state.greenBorderland.kd.green, [greenMap.kills.green, greenMap.deaths.green]],
                        blue: [...state.greenBorderland.kd.blue, [greenMap.kills.blue, greenMap.deaths.blue]]
                    }
                },
                blueBorderland: {
                    ...state.blueBorderland,
                    currentPPT: calculatedPPT.blueBorderland.currentPPT,
                    kd: {
                        ...state.blueBorderland.kd,
                        red: [...state.blueBorderland.kd.red, [blueMap.kills.red, blueMap.deaths.red]],
                        green: [...state.blueBorderland.kd.green, [blueMap.kills.green, blueMap.deaths.green]],
                        blue: [...state.blueBorderland.kd.blue, [blueMap.kills.blue, blueMap.deaths.blue]]
                    }
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default activityAnalyticsStateReducer;