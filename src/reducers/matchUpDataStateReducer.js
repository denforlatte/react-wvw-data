const matchUpDataStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            return {...state, scores: action.payload.skirmishes[action.payload.skirmishes.length - 1].scores}
        }
        default: {
            return state;
        }
    }
}

export default matchUpDataStateReducer;