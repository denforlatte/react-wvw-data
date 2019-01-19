import * as analyticsHelper from '../helpers/analyticsHelper';

const activityAnalyticsStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {

            var calculatedPPT = analyticsHelper.calculatePPT(action.payload.maps);
            return {
                ...state,
                eternalBattlegrounds: {
                    ...state.eternalBattlegrounds,
                    currentPPT: calculatedPPT.eternalBattlegrounds.currentPPT
                },
                redBorderland: {
                    ...state.redBorderland,
                    currentPPT: calculatedPPT.redBorderland.currentPPT
                },
                greenBorderland: {
                    ...state.greenBorderland,
                    currentPPT: calculatedPPT.greenBorderland.currentPPT
                },
                blueBorderland: {
                    ...state.blueBorderland,
                    currentPPT: calculatedPPT.blueBorderland.currentPPT
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default activityAnalyticsStateReducer;