const serverOverviewStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            var scores = action.payload.skirmishes[action.payload.skirmishes.length - 1].scores;
            return {
                ...state,
                red: {
                    kills: action.payload.kills.red,
                    deaths: action.payload.deaths.red,
                    ratio: round(action.payload.kills.red / action.payload.deaths.red, 2),
                    skirmishScore: scores.red,
                    victoryPoints: action.payload.victory_points.red
                },
                green: {
                    kills: action.payload.kills.green,
                    deaths: action.payload.deaths.green,
                    ratio: round(action.payload.kills.green / action.payload.deaths.green, 2),
                    skirmishScore: scores.green,
                    victoryPoints: action.payload.victory_points.green
                },
                blue: {
                    kills: action.payload.kills.blue,
                    deaths: action.payload.deaths.blue,
                    ratio: round(action.payload.kills.blue / action.payload.deaths.blue, 2),
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

//Please move me Danny. Please.
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

export default serverOverviewStateReducer;