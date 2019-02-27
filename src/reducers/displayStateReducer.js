const displayStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_PENDING": {
            return {
                ...state,
                fetching: true,
                fetchFailed: false
            };
        }
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            return {
                ...state, 
                firstFetchSuccess: true,
                fetching: false
            };
        }
        case "FETCH_MATCHUP_DATA_REJECTED": {
            return {
                ...state, 
                fetching: false,
                fetchFailed: true
            };
        }
        case "SELECT_NEW_SERVER": {
            return {
                ...state,
                firstFetchSuccess: false,
                selectedServer: action.payload
            }
        }
        case "UPDATE_DISPLAY_MESSAGE": {
            return {
                ...state,
                message: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default displayStateReducer;