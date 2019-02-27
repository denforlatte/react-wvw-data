import React from 'react';
import serverCodes from './serverCodes.json';

//Get server name from server code
export function getNameByCode(serverCode) {
    return serverCodes.find( server => server.id === serverCode).name;
}


//Get server code from server name
export function getCodeByName(serverName) {
    var serverCode = '';
    var lowercaseServerName = serverName.toLowerCase();

    var i;
    for (i = 0; i < serverCodes.length; i++) {
        if (serverCodes[i].name.toLowerCase() === lowercaseServerName) {
            serverCode = serverCodes[i].id
            return serverCode.toString();
        }
    }
    return serverName;
}

//Display the server names in a human way
export function formatServerNames(primaryServer, allServers) {
    var linkServers = '';

    //Form a string of the linked server(s) with "&" between them if multiple
    var i;
    for (i = 0; i < allServers.length; i++) {
        if (allServers[i] !== primaryServer) {
            if (linkServers !== '') {
                linkServers = '& '
            }
            linkServers = linkServers + getNameByCode(allServers[i]);
        }
    }

    //Return server name with links if applicable
    primaryServer = getNameByCode(primaryServer);

    if (allServers.length > 1) {
        linkServers = ` (linked with ${linkServers})`;
    }
    
    return (
        <div className="row-fixed">
            <h2>{primaryServer}<span>{linkServers}</span></h2>
        </div>); 
}

//Find which position in the array the desired map is in. Requires a colour and the API.maps object.

/** Find which position in the array the desired map is in.
 * Requires a colour and the API.maps object.
 * 
 * @param {string} colour 
 * @param {object} maps 
 */
export function getMapArrayPosition(colour, maps) {

    if (colour === "grey") {
        let i;
        for (i = 0; i < maps.length; i++) {
            if ("Center" === maps[i].type) {
                return i;
            }
        }
    } else {
        let i;
        for (i = 0; i < maps.length; i++) {
            if (`${colour}home` === maps[i].type.toLowerCase()) {
                return i;
            }
        }
    }
    console.warn("Was not able to find map in API.maps: " + colour);
}