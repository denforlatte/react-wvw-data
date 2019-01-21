import React from 'react';

class MapDetails extends React.Component {
    render() {

        return (
            <div className={`card card-${this.props.colour}`}>
                <div className={`row-fixed ${this.props.colour}`}>
                    <h2>{this.props.mapName}</h2>
                </div>
                
                <div className="row-fixed">
                    <p>Test</p>
                </div>
            </div>
        )
    }
}

export default MapDetails;