import React from 'react';
import Proptypes from 'prop-types';

class ObjectivesDisplay extends React.Component {
    render() {
        const { server, won } = this.props;
        return(
            <div className="row-fixed">
                <h3>{`${server}: `}</h3>
                <div className="row-fixed objective-container">
                    <p>{won.camp}x</p><span><div className={`icon-camp icon-${server}`}></div></span>
                </div>
                <div className="row-fixed objective-container">
                    <p>{won.tower}x</p><span><div className={`icon-tower icon-${server}`}></div></span>
                </div>
                <div className="row-fixed objective-container">
                    <p>{won.keep}x</p><span><div className={`icon-keep icon-${server}`}></div></span>
                </div>
                <div className="row-fixed objective-container">
                    <p>{won.castle}x</p><span><div className={`icon-castle icon-${server}`}></div></span>
                </div>
            </div>
        );
    }
}

ObjectivesDisplay.propTypes = {
    server: Proptypes.string.isRequired,
    won: Proptypes.object.isRequired
}

export default ObjectivesDisplay;