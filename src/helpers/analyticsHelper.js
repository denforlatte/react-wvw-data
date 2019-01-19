import store from '../store';

export function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export function beautifyNumber(num) {
    if (num >= 10000) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }
    return num;
}

export function updateMatchupData(serverCode) {
    store.dispatch({
        type: "FETCH_MATCHUP_DATA",
        payload: fetch(`https://api.guildwars2.com/v2/wvw/matches?world=${serverCode}`)
        .then((response) => {
            var result = response.json()
            return result;

            //This needs to then hand response.maps to calculatePPT(maps).
        })
    });
}

export function calculatePPT(maps) {

    console.log(maps);
    


    //Don't worry about the following code. The problem is that maps is undefined
    store.dispatch({
        type: "UPDATE_PPT",
        payload: totalMapPPT(0)
    })

    function totalMapPPT (mapI) {
        var objectives = maps[mapI].objectives;
        var totalMapPPT = 0;
        
        var i;
        for (i = 0; i < objectives.length; i++) {
            totalMapPPT += objectives[i].points_tick;
        }

        return 5;
    }
}