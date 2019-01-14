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
        var serverList = [];

        var i;
        for (i = 0; i < serverCodes.length; i++) {
            var server = serverCodes[i];

            if (continent === "EU") {
                if (server.id >= 2000){
                    serverList.push(
                        <div key={"dropdown_" + server.id} ><Link to={"/"+server.id} >{server.name}</Link></div>
                    )
                }
            } else if (continent === "NA") {
                if (server < 2000) {
                    serverList.push(
                        <div key={"dropdown_" + server.id} ><Link to={"/"+server.id} >{server.name}</Link></div>
                    )
                }
            }
        }

        this.setState({serverList});
    }

    render() {
        return <DropdownButton buttonText={this.props.continent} dropdownContent={this.state.serverList}/>
    }
}

export default ServerSelector;