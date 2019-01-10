import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Layouts
import Header from './components/layouts/Header';

//Pages
import Home from './components/Home';
import MatchUpOverview from './components/MatchUpOverview';


export default (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" component={Home} />>
                <Route path="/:serverName" component={MatchUpOverview} />
                <Route component={Home} />
            </Switch>
        </Fragment>
        
    </BrowserRouter>
);