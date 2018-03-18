import React from 'react';
import { Route } from 'react-router-dom';
import Main from '/imports/ui/layout/landingLayout';
import Home from '/imports/ui/pages/home/main';

//Set Routes
export default (
    <Main>
        <Route exact path="/" component={Home} />
    </Main>
);