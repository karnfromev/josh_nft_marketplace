import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Spotlight from '../components/spotlight/spotlight';
import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import USP from '../components/USP3/usp3';

import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Spotlight />
                <Work/>
                <Explore/>
                <USP/>
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;