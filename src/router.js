import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Layouts
import Header from './components/layouts/Header';

//Pages
import Home from './components/Home';
import MatchUpOverview from './components/MatchUpOverview';


export default (
    <BrowserRouter>
        
            <Switch>
                <Route path="/" component={Home} exact/>>
                <Route path="/:serverName" component={MatchUpOverview} />
                <Route component={Home} />
            </Switch>
        
    </BrowserRouter>
);