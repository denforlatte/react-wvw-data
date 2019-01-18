import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <br/><br/>
                <h1>Introduction</h1>
                <p>Welcome to my Guild Wars 2 world versus world overview web app.</p>
                <p>This app will show you the key details of the week long match up between the selected world (game server) and its two opponents. Low population worlds are often linked with other worlds and where this is the case the app with display "Primary Server" with "Linked Servers".</p>
                <p>The long term goal for this app is to show how active each of the four maps in the match up are without having to log in. My rough plan for this is to check which objectives have been won and lost in the last five minutes and watch the kills/deaths of the map and graph the changes.</p>
                <p>Whether or not that will give an accurate measure of map activity remains to be seen but it should be interesting none the less and I'm having fun making this...</p>
                <p>So select a server and see how the match up is going!</p>
            </div>
        )
    }
}

export default Home;