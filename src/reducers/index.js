import { combineReducers } from 'redux';

//Reducers
import displayStateReducer from './displayStateReducer';
import fullAPIStateReducer from './fullAPIStateReducer';
import serverOverviewStateReducer from './serverOverviewStateReducer';
import activityAnalyticsStateReducer from './activityAnalyticsStateReducer';

//Combine Reducers
var reducers = combineReducers({
    displayState: displayStateReducer,
    fullAPIState: fullAPIStateReducer,
    serverOverviewState: serverOverviewStateReducer,
    activityAnalyticsState: activityAnalyticsStateReducer
});

export default reducers;