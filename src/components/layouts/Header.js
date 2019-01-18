import React from 'react';
import { Link } from 'react-router-dom';
import ServerSelector from './ServerSelector';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        const { selectedServer, firstFetchSuccess } = this.props.displayState;

        return (
            <div className="header">
                <h1><Link to={"/"} className="reset-a">Guild Wars 2 WvW Intel</Link></h1>
                <div>
                    <div className="btn-container">
                        <br/>
                        <h2>Select world:&nbsp;</h2>
                        <ServerSelector continent="EU" selectedServer={selectedServer} firstFetchSuccess={firstFetchSuccess}/>
                        <br/>
                        <ServerSelector continent="NA" selectedServer={selectedServer} firstFetchSuccess={firstFetchSuccess}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        displayState: store.displayState
    };
}

export default connect(mapStateToProps)(Header);