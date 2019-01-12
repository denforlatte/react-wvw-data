import serverCodes from './serverCodes.json';

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

    var serverName = `${getNameByCode(primaryServer)} with ${links}`;
    
    return serverName; 
}