import serverCodes from './serverCodes.json';

//Get server name
export function getNameByCode(serverCode) {
    var serverName = '';

    var i;
    for (i = 0; i < serverCodes.length; i++) {
        if (serverCodes[i].id === serverCode) {
            serverName = serverCodes[i].name
            return serverName;
        }
    }
    return serverCode.toString();
}


//Get server code. UNTESTED
export function getCodeByName(serverName) {
    var serverCode = '';
    var lowercaseServerName = serverName.toLowerCase();

    var i;
    for (i = 0; i < serverCodes.length; i++) {
        if (serverCodes[i].name.toLowerCase() === lowercaseServerName) {
            serverCode = serverCodes[i].id
            return serverCode;
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
    var serverName = getNameByCode(primaryServer);

    if (allServers.length > 1) {
        serverName = `${serverName} with ${linkServers}`;
    }
    
    return serverName; 
}