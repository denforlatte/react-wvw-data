import store from '../store';

var apiService = (function() {
    var instance;

    //Singleton wrapper
    function init() {
        var timerInstance = false;
  
        function beep () {
            console.log("beep");

            clearInterval(timerInstance);
            timerInstance = false;
        }

        //Dispatch a fetch to the store for the promise middleware to handle.
        function fetchAPI(serverCode) {
            store.dispatch({
                type: "FETCH_MATCHUP_DATA",
                payload: fetch(`https://api.guildwars2.com/v2/wvw/matches?world=${serverCode}`)
                .then(response => response.json())
            });
        }
    
        return { // public interface
            startFetchingAPI: function (serverCode) {
                //Check there is not already a timer
                if (timerInstance) {
                    clearInterval(timerInstance);
                    timerInstance = false;
                    console.warn("Existing API fetching overwritten.")
                }

                //Run first fetch and start timer
                fetchAPI(serverCode);
                timerInstance = setInterval(beep, 3000);

                //Set which server we are currently looking at
                store.dispatch({
                    type: "SELECT_NEW_SERVER",
                    payload: serverCode
                });
            },
            stopFetchingAPI: function () {
                //Clear timer
                clearInterval(timerInstance);
                timerInstance = false;

                //Reset the selected server to an empty string.
                store.dispatch({
                    type: "SELECT_NEW_SERVER",
                    payload: ''
                });
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