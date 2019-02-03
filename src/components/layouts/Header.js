import React from 'react';
import { Link } from 'react-router-dom';
import ServerSelector from './ServerSelector';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        const { selectedServer, firstFetchSuccess, fetching } = this.props.displayState;

        var updating = '';
        if (fetching) {
            updating = 'Updating...';
        }

        return (
            <div className="header">
                <h1><Link to={"/"} className="reset-a">Guild Wars 2 WvW Overview</Link></h1>
                <div>{updating}</div>
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
}

const mapStateToProps = function(store) {
    return {
        displayState: store.displayState
    };
}

export default connect(mapStateToProps)(Header);