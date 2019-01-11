import React from 'react';

class MapDetails extends React.Component {
    render() {
        let classes = `card ${this.props.colour}`;

        return (
            <div className={classes}>
                <h2>{this.props.mapName}</h2>
            </div>
        )
    }
}

export default MapDetails;