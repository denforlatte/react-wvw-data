import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//Layouts
import Header from './components/layouts/Header';

//Pages
import Home from './components/Home';
import MatchUpOverview from './components/MatchUpOverview';


export default (
    <Router basename={process.env.PUBLIC_URL} history={browserHistory} >
        <Route component={Header}>
            <Route path="/" component={Home}>
                <Route path=":serverName" component={MatchUpOverview} />
            </Route>
        </Route>
    </Router>
);