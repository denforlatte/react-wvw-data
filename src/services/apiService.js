import store from '../store';
import config from '../config.json';

var apiService = (function() {
    var instance;
    var fetchTimeoutCounter;

    //Singleton wrapper
    function init() {
        var timerInstance = false;

        //Dispatch a fetch to the store for the promise middleware to handle.
        function fetchAPI(serverCode) {
            if(fetchTimeoutCounter-- <= 0) {
                stopFetchingAPI()
                store.dispatch({
                    type: "UPDATE_DISPLAY_MESSAGE",
                    payload: "Time out due to inactivity. Please refresh the page or select a different world."
                })
            }

            store.dispatch({
                type: "FETCH_MATCHUP_DATA",
                payload: fetch(config.matchupAPIRoot + serverCode)
                .then(response => response.json())
            });
        }

        function stopFetchingAPI() {
            //Clear timer
            clearInterval(timerInstance);
            timerInstance = false;

            //Reset the selected server to an empty string.
            store.dispatch({
                type: "SELECT_NEW_SERVER",
                payload: ''
            });
        }
    
        //Find out if the public functions should just point to private ones with the actual code.
        return { // public interface
            startFetchingAPI: function (serverCode) {
                //Clear any existing display messages
                store.dispatch({
                    type: "UPDATE_DISPLAY_MESSAGE",
                    payload: ""
                })

                //Check there is not already a timer
                if (timerInstance) {
                    clearInterval(timerInstance);
                    timerInstance = false;
                    console.warn("Existing API fetching overwritten.")
                }

                //Set the timeout timer
                fetchTimeoutCounter = config.fetchTimeout;

                //Run first fetch and start timer
                fetchAPI(serverCode);
                if (config.refreshInterval !== 0 ) { // 0 = don't update
                    timerInstance = setInterval(fetchAPI, config.refreshInterval, serverCode);
                }

                //Set which server we are currently looking at
                store.dispatch({
                    type: "SELECT_NEW_SERVER",
                    payload: serverCode
                });
            },
            stopFetchingAPI: function () {
                stopFetchingAPI();
            }
        };
    }

    //Get singleton instance or create one using apiService.getInstance()
    return  {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }    
})();

export default apiService;