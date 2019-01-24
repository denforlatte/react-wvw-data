import React from 'react';
import PropTypes from 'prop-types';

class MapServerScores extends React.Component {
    render() {
        const { serverName, colour, score, ppt, kills, deaths, ratio } = this.props;

        return (
            <div className={`inner-card card-${colour}`}>
                <div className={`row-fixed inner-card-${colour}`}>
                    <h3 className="left-align">{"1st"} {serverName}</h3>
                </div>

                <div className="card-compact row-fixed">
                    <div>
                        <p>Score: {score}</p>
                    </div>
                    <div>
                        <p>PPT: {ppt}</p>
                    </div>
                    <div>
                        <p>K/D/R: {kills}/{deaths}/{ratio}</p>
                    </div>
                </div>
            </div>
        );
    }
}

MapServerScores.propTypes = {
    serverName: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    ppt: PropTypes.number.isRequired
}

export default MapServerScores;