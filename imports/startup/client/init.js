import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'
import { onPageLoad } from "meteor/server-render";
import routes from '/imports/startup/both/routes'


const App = () => (
    <BrowserRouter>
        <Switch>
            {routes}
        </Switch>
    </BrowserRouter>
);

//Client side hydration
onPageLoad(() => {ReactDOM.hydrate(<App />, document.getElementById("render-target"))});