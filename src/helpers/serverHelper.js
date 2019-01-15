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
    var links = '';

    var i;
    for (i = 0; i < allServers.length; i++) {
        if (allServers[i] !== primaryServer) {
            if (links !== '') {
                links = '& '
            }
            links = links + getNameByCode(allServers[i]);
        }
    }

    //This needs to check there IS a linked server:
    var serverName = `${getNameByCode(primaryServer)} with ${links}`;
    
    return serverName; 
}