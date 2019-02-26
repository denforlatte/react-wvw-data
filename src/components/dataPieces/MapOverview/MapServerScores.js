import React from 'react';
import PropTypes from 'prop-types';

class MapServerScores extends React.Component {
    render() {
        const { serverName, colour, position, score, ppt, kills, deaths, ratio } = this.props;

        return (
            <div className={`inner-card inner-card-${colour}`}>
                <div className={`row-fixed inner-card-${colour}`}>
                    <h3 className="font-left-align">{position} {serverName}</h3>
                </div>

                <div className="card-compact row-fixed">
                    <div>
                        <p>Score:</p>
                        <p>{score}</p>
                    </div>
                    <div>
                        <p>PPT:</p>
                        <p>{ppt}</p>
                    </div>
                    <div>
                        <p>K/D/R:</p>
                        <p>{kills} / {deaths} / {ratio}</p>
                    </div>
                </div>
            </div>
        );
    }
}

MapServerScores.propTypes = {
    serverName: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    ppt: PropTypes.number.isRequired
}

export default MapServerScores;