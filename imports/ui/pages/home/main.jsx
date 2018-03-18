import React from 'react';
import NavBar from '../../components/navBar/main';
import Footer from '../../components/footer/main';
import Banner from './section-1.jsx';
import Scores from './section-2.jsx';
import Showcase from './section-3.jsx';
import Comparison from './section-4.jsx';
import Credentials from './section-5.jsx';
import CallAction from './section-6.jsx';

//Separated homepage into components for increased readability
export default function AppHomePage() {
    return (
        <div id="style-overrides">
            <Banner />
            <hr />
            <Scores />
            <Showcase />
            <Comparison />
            <hr />
            <Credentials />
            <hr />
            <CallAction />
            <Footer />
            <NavBar />
        </div>
    );
}