import React from 'react';
import PropTypes from 'prop-types';

class MapServerScores extends React.Component {
    render() {
        const { serverName, colour, score } = this.props;

        return (
            <div className={`inner-card card-${colour}`}>
                <div className={`row-fixed inner-card-${colour}`}>
                    <h3 className="left-align">{"1st"} {serverName}</h3>
                </div>

                <div className="card-compact row-fixed">
                    <div>
                        <p>Score: {999}</p>
                    </div>
                    <div>
                        <p>PPT: {999}</p>
                    </div>
                    <div>
                        <p>K/D/R: {9999}/{9999}/{1.38}</p>
                    </div>
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