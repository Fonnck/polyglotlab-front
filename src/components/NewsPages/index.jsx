import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'News' },
                ]}
            />
            <News />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default NewsPages;
