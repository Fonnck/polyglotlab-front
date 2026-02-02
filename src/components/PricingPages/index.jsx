import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import Pricing from './Pricing.jsx';

function Pricing() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/pricing', title: 'Pricing' },
                ]}
            />
            <Pricing />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Pricing;
