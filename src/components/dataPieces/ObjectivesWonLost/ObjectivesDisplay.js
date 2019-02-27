import React from 'react';
import Proptypes from 'prop-types';

class ObjectivesDisplay extends React.Component {
    render() {
        const { serverName, won, objectiveColours, stonemist } = this.props;
        let stonemistIcon = (
            <div className="row-fixed objective-container">
                <p>{won.castle}x</p><span><div className={`icon-castle icon-${objectiveColours.castle}`}></div></span>
            </div>
        );
        if (!stonemist) {
            stonemistIcon = "";
        }

        return(
            <div className="objectives-grid">
                <h4>{`${serverName}: `}</h4>
                <div className="row-fixed objective-container">
                    <p>{won.camp}x</p><span><div className={`icon-camp icon-${objectiveColours.camp}`}></div></span>
                </div>
                <div className="row-fixed objective-container">
                    <p>{won.tower}x</p><span><div className={`icon-tower icon-${objectiveColours.tower}`}></div></span>
                </div>
                <div className="row-fixed objective-container">
                    <p>{won.keep}x</p><span><div className={`icon-keep icon-${objectiveColours.keep}`}></div></span>
                </div>
                {stonemistIcon}
            </div>
        );
    }
}

ObjectivesDisplay.propTypes = {
    serverName: Proptypes.string.isRequired,
    won: Proptypes.object.isRequired,
    objectiveColours: Proptypes.object.isRequired
}

export default ObjectivesDisplay;