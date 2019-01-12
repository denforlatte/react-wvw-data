const displayStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            return {
                ...state, 
                firstFetchSucess: true,
                fetching: false
            };
        }
        default: {
            return state;
        }
    }
}

export default displayStateReducer;