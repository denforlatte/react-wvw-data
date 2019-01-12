import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const initialState = {
    displayState: {
        firstFetchSucess: false,
        fetching: false
    },
    matchUpDataState: {},
    activityAnalyticsState: {}
}

const store = createStore(reducers, initialState, applyMiddleware(logger, promise()));

export default store;