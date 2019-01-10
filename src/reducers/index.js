import { combineReducers } from 'redux';

//Reducers
import wvwServerData from './wvwMetadata';
import wvwMatchUpData from './wvwMatchUpData';

//Combine Reducers
var reducers = combineReducers({
    wvwServerData,
    wvwMatchUpData
});

export default reducers;