import React from 'react';
import Proptypes from 'prop-types';

class ObjectivesDisplay extends React.Component {
    render() {
        return(
            <div>
                ObjectivesDisplay
            </div>
        );
    }
}

ObjectivesDisplay.propTypes = {
    server: Proptypes.string.isRequired
}

export default ObjectivesDisplay;