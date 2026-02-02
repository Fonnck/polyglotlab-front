import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import AboutSection from './About.jsx';
import CoursesSection from './Course.jsx';
import FeaturesSection from './Feature.jsx';
import TeamSection from './Team.jsx';

function AboutUs() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'About us' },
                ]}
            />
            <AboutSection />
            <CoursesSection />
            <FeaturesSection />
            <TeamSection />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default AboutUs;
