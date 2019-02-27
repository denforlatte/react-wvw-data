const fullAPIStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default fullAPIStateReducer;