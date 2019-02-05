import React from 'react';
import { Link } from 'react-router-dom';
import ServerSelector from './ServerSelector';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = { displayMessage: "", messageWillClear: false };
    }

    //Check for messages to display or to clear.
    componentWillReceiveProps(props, state) {
        const { fetching } = props.displayState;

        if (fetching) {
            console.log("triggered");
            this.setState({displayMessage: "updating..."});
        }
        else if (!fetching && this.state.displayMessage !== "" && !this.state.messageWillClear) {
            this.clearDisplayMessage();
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

    clearDisplayMessage() {
        this.setState({messageWillClear: true});
        setTimeout(() => {
            this.setState({displayMessage: "", messageWillClear: false});
        }, 1000);
    }
}

const mapStateToProps = function(store) {
    return {
        displayState: store.displayState
    };
}

export default connect(mapStateToProps)(Header);