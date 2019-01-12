const displayStateReducer = function(state={}, action) {
    switch (action.type) {
        case "FETCH_MATCHUP_DATA_FULFILLED": {
            return {...state, firstFetchSucess: true};
        }
        default: {
            return state;
        }
    }
}

export default displayStateReducer;