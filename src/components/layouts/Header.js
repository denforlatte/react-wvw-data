import React from 'react';
import { Link } from 'react-router-dom';
import ServerSelector from './ServerSelector';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = { displayMessage: ""};

        // eslint-disable-next-line
        var displayMessageTimer;
    }

    //Check for messages to display or to clear.
    componentWillReceiveProps(props, state) {
        const { fetching, fetchFailed } = props.displayState;

        if (fetching) {
            this.setDisplayMessage("updating...", 1000);
        }
        else if (fetchFailed) {
            this.setDisplayMessage("failed...", 9000);
        }
    }

    render() {
        const { selectedServer, firstFetchSuccess } = this.props.displayState;
        const { displayMessage } = this.state;

        return (
            <div className="header">
                <h1><Link to={"/"} className="reset-a">Guild Wars 2 WvW Overview</Link></h1>
                <div className="display-message">{displayMessage}</div>
                <div>
                    <div className="btn-container">
                        <br/>
                        <h2>Select world:&nbsp;</h2>
                        <ServerSelector continent="EU" selectedServer={selectedServer} firstFetchSuccess={firstFetchSuccess}/>
                        <ServerSelector continent="NA" selectedServer={selectedServer} firstFetchSuccess={firstFetchSuccess}/>
                    </div>
                </div>
                
            </div>
        )
    }

    setDisplayMessage(message, displayTime) {

        clearTimeout(this.displayMessageTimer);

        this.setState({displayMessage: message});
        this.displayMessageTimer = setTimeout(() => {
            this.setState({displayMessage: ""});
        }, displayTime);
    }
}

const mapStateToProps = function(store) {
    return {
        displayState: store.displayState
    };
}

export default connect(mapStateToProps)(Header);