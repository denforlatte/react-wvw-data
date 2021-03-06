import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const initialState = {
    displayState: {
        selectedServer: '',
        firstFetchSuccess: false,
        fetching: false,
        fetchFailed: false,
        message: ""
    },
    fullAPIState: {},
    serverOverviewState: {
        red: {
            name: "Red Server",
            ppt: 999,
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        },
        green: {
            name: "Green Server",
            ppt: 999,
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        },
        blue: {
            name: "Blue Server",
            ppt: 999,
            kills: 0,
            deaths: 0,
            ratio: 0,
            skirmishScore: 0,
            victoryPoints: 0
        }
    },
    activityAnalyticsState: {
        eternalBattlegrounds: {
            currentPPT: {
                red: 0,
                green: 0,
                blue: 0
            },
            kd: {
                red: [],
                green: [],
                blue: []
            }
        },
        redBorderland: {
            currentPPT: {
                red: 0,
                green: 0,
                blue: 0
            },
            kd: {
                red: [],
                green: [],
                blue: []
            }
        },
        greenBorderland: {
            currentPPT: {
                red: 0,
                green: 0,
                blue: 0
            },
            kd: {
                red: [],
                green: [],
                blue: []
            }
        },
        blueBorderland: {
            currentPPT: {
                red: 0,
                green: 0,
                blue: 0
            },
            kd: {
                red: [],
                green: [],
                blue: []
            }
        }
    }
}

const store = createStore(reducers, initialState, applyMiddleware(logger, promise()));

export default store;