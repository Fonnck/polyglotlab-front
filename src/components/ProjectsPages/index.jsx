import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Project Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/projects', title: 'Projects' },
                ]}
            />
            <Projects />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
