import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import Team from './Team.jsx';

function TeamPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/team', title: 'Team' },
                ]}
            />
            <Team />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default TeamPages;
