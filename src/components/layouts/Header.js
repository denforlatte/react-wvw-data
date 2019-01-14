import React from 'react';
import ServerSelector from './ServerSelector';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h1>Guild Wars 2 WvW Intel</h1>
                <div>
                    <div className="btn-container">
                        <ServerSelector continent="EU" currentServer={this.props.currentServer}/>
                        <ServerSelector continent="NA"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;