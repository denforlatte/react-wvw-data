import React from 'react';

class ServerOverview extends React.Component {
    render() {
        let classes = `card ${this.props.colour}`;

        return (
            <div className={classes}>
                <h2>{this.props.serverName}</h2>
                <div className="row">
                    <div>
                        <h3>Kills</h3>
                        <p>99 999</p>
                    </div>
                    <div>
                        <h3>Deaths</h3>
                        <p>99 999</p>
                    </div>
                    <div>
                        <h3>Ratio</h3>
                        <p>99 999</p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h3>Skirmish Score</h3>
                        <p>9999</p>
                    </div>
                    <div>
                        <h3>Victory Points</h3>
                        <p>999</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerOverview;