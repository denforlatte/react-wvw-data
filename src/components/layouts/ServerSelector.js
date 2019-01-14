import React from 'react';
import { Link } from 'react-router-dom';

import DropdownButton from './DropdownButton';

import serverCodes from '../../helpers/serverCodes.json';

class ServerSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serverList: []
        }
    }

    componentDidMount() {
        const { continent } = this.props;
        var filteredServers = [];
        
        if (continent === "EU") {
            filteredServers = serverCodes.filter(server => server.id >= 2000);
        } else if (continent === "NA") {
            filteredServers = serverCodes.filter(server => server.id < 2000);
        } else {
            filteredServers = serverCodes;
            console.warn("Continent for ServerSelector not set correctly");
        }


        var serverList = filteredServers.map((server) => (
            <Link to={"/" + server.id} key={"dropdown " + server.id}>{server.name}</Link>
            ));


        this.setState({serverList});
    }

    render() {
        return <DropdownButton buttonText={this.props.continent} dropdownContent={this.state.serverList}/>
    }
}

export default ServerSelector;