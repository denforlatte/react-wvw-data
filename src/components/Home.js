import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <br/><br/>
                <h1>Introduction</h1>
                <p>Welcome to my Guild Wars 2 world versus world overview web app.</p>
                <p>This app will show you the key details of the week long match up between the selected world (game server) and its two opponents. Low population worlds are often linked with other worlds and where this is the case the app with display "Primary Server" with "Linked Servers".</p>
                <p>The goal of this app is to show how active each of the four maps in the match up are without having to log in. To measure activity the app displays basic information about the map including the PPT (points per tick) which reflects how much of the map is under a world's control; objectives gained which shows which objectives have recently been captured by whom; and a kills and deaths tracker.</p>
                <p>Kills and deaths are tracked from when you click on a match up so start blank before filling in in 30 second intervals.</p>
                <p>Whether or not that will give an accurate measure of map activity remains to be seen but it should be interesting and I welcome feedback. So far I have noticed that off-peak times often have extended periods of zero kills (I thought it was broken at first).</p>
                <p>So select a server and see how the match up is going!</p>
                <br/><br/>
            </div>
        )
    }
}

export default Home;


//<p>PS. Find out more about this project at <a href="https://www.dannywilkins.me/portfolio/gw2reactwebapp">dannywilkins.me/portfolio/gw2reactwebapp</a></p>