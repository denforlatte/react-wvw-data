import * as serverHelper from './serverHelper';

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

export function calculatePPT(maps) {
    var servers = ["red", "green", "blue"];

    var calculatedPPT = {
        eternalBattlegrounds: {
            currentPPT: {}
        },
        redBorderland: {
            currentPPT: {}
        },
        greenBorderland: {
            currentPPT: {}
        },
        blueBorderland: {
            currentPPT: {}
        }
    };

    var i;
    for (i = 0; i < 3; i++) {
        calculatedPPT.eternalBattlegrounds.currentPPT[servers[i]] = totalMapPPT(serverHelper.getMapArrayPosition("grey", maps), servers[i])
    }
    for (i = 0; i < 3; i++) {
        calculatedPPT.redBorderland.currentPPT[servers[i]] = totalMapPPT(serverHelper.getMapArrayPosition("red", maps), servers[i])
    }
    for (i = 0; i < 3; i++) {
        calculatedPPT.greenBorderland.currentPPT[servers[i]] = totalMapPPT(serverHelper.getMapArrayPosition("green", maps), servers[i])
    }
    for (i = 0; i < 3; i++) {
        calculatedPPT.blueBorderland.currentPPT[servers[i]] = totalMapPPT(serverHelper.getMapArrayPosition("blue", maps), servers[i])
    }
    

    function totalMapPPT (mapI, server) {
        var objectives = maps[mapI].objectives;
        var totalMapPPT = 0;
        
        var x;
        for (x = 0; x < objectives.length; x++) {
            if (objectives[x].owner.toLowerCase() === server) {
                totalMapPPT += objectives[x].points_tick;
            }
        }

        return totalMapPPT;
    }

    return calculatedPPT;
}