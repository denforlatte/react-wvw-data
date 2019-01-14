import React from 'react';
import ServerSelector from './ServerSelector';

class Header extends React.Component {
    render() {
        return (
            <div>
                <ServerSelector continent="EU"/>
                <ServerSelector continent="NA"/>
            </div>
        )
    }
}

export default Header;