import React from 'react';
import { Link } from 'react-router-dom';
import ServerSelector from './ServerSelector';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h1><Link to={"/"} className="reset-a">Guild Wars 2 WvW Intel</Link></h1>
                <div>
                    <div className="btn-container">
                        <br/>
                        <div>Select world: &nbsp;</div>
                        <ServerSelector continent="EU" currentServer={this.props.currentServer}/>
                        <br/>
                        <ServerSelector continent="NA"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;