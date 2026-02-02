import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import Contact from './Contact.jsx';

function ContactPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Contact"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/', title: 'Contact' },
                ]}
            />
            <Contact />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ContactPages;
