import * as serverHelper from '../helpers/serverHelper';
import * as analyticsHelper from '../helpers/analyticsHelper';

const serverOverviewStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            var scores = action.payload.skirmishes[action.payload.skirmishes.length - 1].scores;
            return {
                ...state,
                red: {
                    name: serverHelper.formatServerNames(action.payload.worlds.red, action.payload.all_worlds.red),
                    kills: action.payload.kills.red,
                    deaths: action.payload.deaths.red,
                    ratio: analyticsHelper.round(action.payload.kills.red / action.payload.deaths.red, 2),
                    skirmishScore: scores.red,
                    victoryPoints: action.payload.victory_points.red
                },
                green: {
                    name: serverHelper.formatServerNames(action.payload.worlds.green, action.payload.all_worlds.green),
                    kills: action.payload.kills.green,
                    deaths: action.payload.deaths.green,
                    ratio: analyticsHelper.round(action.payload.kills.green / action.payload.deaths.green, 2),
                    skirmishScore: scores.green,
                    victoryPoints: action.payload.victory_points.green
                },
                blue: {
                    name: serverHelper.formatServerNames(action.payload.worlds.blue, action.payload.all_worlds.blue),
                    kills: action.payload.kills.blue,
                    deaths: action.payload.deaths.blue,
                    ratio: analyticsHelper.round(action.payload.kills.blue / action.payload.deaths.blue, 2),
                    skirmishScore: scores.blue,
                    victoryPoints: action.payload.victory_points.blue
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default serverOverviewStateReducer;