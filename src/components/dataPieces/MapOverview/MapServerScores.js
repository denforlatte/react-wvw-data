import React from 'react';
import PropTypes from 'prop-types';

class MapServerScores extends React.Component {
    render() {
        const { serverName, colour, score } = this.props;

        return (
            <div className={`inner-card card-${colour}`}>
                <div className={`row-fixed ${colour}`}>
                    <h3>{serverName}</h3>
                </div>

                <div>
                    <p>{score}</p>
                </div>
            </div>
        );
    }
}

MapServerScores.propTypes = {
    serverName: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}

export default MapServerScores;