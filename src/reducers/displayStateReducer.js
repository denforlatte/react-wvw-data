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
                firstFetchSuccess: true,
                fetching: false
            };
        }
        case "SELECT_NEW_SERVER": {
            return {
                ...state,
                firstFetchSuccess: false,
                selectedServer: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default displayStateReducer;