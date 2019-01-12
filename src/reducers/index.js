import { combineReducers } from 'redux';

//Reducers
import displayStateReducer from './displayStateReducer';
import serverOverviewStateReducer from './serverOverviewStateReducer';
import activityAnalyticsStateReducer from './activityAnalyticsStateReducer';

//Combine Reducers
var reducers = combineReducers({
    displayState: displayStateReducer,
    serverOverviewState: serverOverviewStateReducer,
    activityAnalyticsState: activityAnalyticsStateReducer
});

export default reducers;