import { combineReducers } from 'redux';

//Reducers
import wvwServerData from './wvwServerData';
import wvwMatchUpData from './wvwMatchUpData';

//Combine Reducers
var reducers = combineReducers({
    wvwServerData,
    wvwMatchUpData
});

export default reducers;