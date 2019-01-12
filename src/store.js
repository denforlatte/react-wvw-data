import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const initialState = {
    displayState: {
        firstFetchSucess: false,
        fetching: false
    },
    serverOverviewState: {
        red: {
            name: "blank",
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        },
        green: {
            name: "blank",
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        },
        blue: {
            name: "blank",
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        }
    },
    activityAnalyticsState: {}
}

const store = createStore(reducers, initialState, applyMiddleware(logger, promise()));

export default store;