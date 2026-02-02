import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import CoursesGrid from './Course.jsx';

function NewsPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Courses"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/Course', title: 'Courses' },
                ]}
            />
            <CoursesGrid />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default NewsPages;
