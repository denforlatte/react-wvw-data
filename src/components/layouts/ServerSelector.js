import React from 'react';
import { Link } from 'react-router-dom';

import DropdownButton from './DropdownButton';

import serverCodes from '../../helpers/serverCodes.json';

class ServerSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serverList: [],
            filteredServers: []
        }
    }

    componentDidMount() {
        const { continent } = this.props;
        var filteredServers = [];
        

        //Make a new list of continent specific servers
        if (continent === "EU") {
            filteredServers = serverCodes.filter(server => server.id >= 2000);
        } else if (continent === "NA") {
            filteredServers = serverCodes.filter(server => server.id < 2000);
        } else {
            filteredServers = serverCodes;
            console.warn("Continent for ServerSelector not set correctly");
        }

        this.setState({filteredServers}, () => this.compileDropdownMenu());
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedServer !== this.props.selectedServer) {
            this.compileDropdownMenu();
        }
    }

    //If firstFetchSuccess is false, the dropdrown menu won't show. 
    //The usefulness for this is that changing selected server sets this to false until the data is in, causing the menu you close.
    render() {
        if (this.props.firstFetchSuccess === false) {
            return <DropdownButton buttonText={this.props.continent} dropdownContent={[]}/>
        }
        return <DropdownButton buttonText={this.props.continent} dropdownContent={this.state.serverList}/>
    }

    compileDropdownMenu() {
        //Creates an array of links for the dropdown menu, highlighting the currently selected server
        var serverList = [];
        var i;
        for (i = 0; i < this.state.filteredServers.length; i++) {
            var server = this.state.filteredServers[i];
            

            if (server.id == this.props.selectedServer) {
                serverList.push(
                    <Link to={"#"} key={"dropdown " + server.id} className="dropdown-active">{server.name}</Link>
                );
            } else {
                serverList.push(
                    <Link to={"/" + server.id} key={"dropdown " + server.id} >{server.name}</Link>
                );
            }
        }



        this.setState({serverList});
    }
}

export default ServerSelector;