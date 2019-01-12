import { combineReducers } from 'redux';

//Reducers
import displayStateReducer from './displayStateReducer';
import matchUpDataStateReducer from './matchUpDataStateReducer';
import activityAnalyticsStateReducer from './activityAnalyticsStateReducer';

//Combine Reducers
var reducers = combineReducers({
    displayState: displayStateReducer,
    matchUpDataState: matchUpDataStateReducer,
    activityAnalyticsState: activityAnalyticsStateReducer
});

export default reducers;