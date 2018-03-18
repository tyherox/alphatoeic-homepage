import React from "react";
import { onPageLoad } from "meteor/server-render";
import {StaticRouter, Switch} from 'react-router-dom'
import { renderToString } from "react-dom/server";
import routes from '/imports/startup/both/routes'

onPageLoad(sink => {

    const context = {};

    const App = props => (
        <StaticRouter location={props.location} context={context}>
            <Switch>
                {routes}
            </Switch>
        </StaticRouter>
    );

    //Server side rendering
    sink.renderIntoElementById("render-target", renderToString(<App location={sink.request.url}/>));
});