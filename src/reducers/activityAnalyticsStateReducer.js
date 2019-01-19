import * as analyticsHelper from '../helpers/analyticsHelper';

const activityAnalyticsStateReducer = function(state={}, action) {
    switch (action.type) {
        case "UPDATE_PPT": {
            if (!action.payload.worlds) { 
                console.warn("Server code not found.") 
                return state;
            }

            var currentSkirmish = action.payload.skirmishes[action.payload.skirmishes.length - 1];
            return {
                ...state,
                red: {
                    ...state.red,
                    eBPPT: 0,
                    redBLPPT: 0,
                    greenBLPPT: 0,
                    blueBLPPT: 0
                },
                green: {
                    ...state.green,
                    eBPPT: 0,
                    redBLPPT: 0,
                    greenBLPPT: 0,
                    blueBLPPT: 0
                },
                blue: {
                    ...state.blue,
                    eBPPT: 0,
                    redBLPPT: 0,
                    greenBLPPT: 0,
                    blueBLPPT: 0
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default activityAnalyticsStateReducer;