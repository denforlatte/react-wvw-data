import React from 'react';

class ServerOverview extends React.Component {   
    render() {
        const { name, colour, ppt, kills, deaths, ratio, score, victoryPoints } = this.props;

        return (
            <div className={`card card-${this.props.colour}`}>
                <div className={`row-fixed ${this.props.colour}`}>
                    <div>{name}</div>
                    <h2 className="ppt">+ {ppt} PPT</h2>
                </div>

                <div className="row-fixed">
                    <div>
                        <h3>Kills</h3>
                        <p>{kills}</p>
                    </div>
                    <div>
                        <h3>Deaths</h3>
                        <p>{deaths}</p>
                    </div>
                    <div>
                        <h3>Ratio</h3>
                        <p>{ratio}</p>
                    </div>
                </div>
                <div className="row-fixed">
                    <div>
                        <h3>Skirmish Score</h3>
                        <p>{score}</p>
                    </div>
                    <div>
                        <h3>Victory Points</h3>
                        <p>{victoryPoints}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerOverview;