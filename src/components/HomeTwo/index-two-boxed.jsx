import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeTwo.jsx';
import FeatureHomeTwo from './FeatureHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import HomeTwoHeaderBoxed from './HomeTwoHeaderBoxed.jsx';
import CategoriesSectionCurrentTwo from './Categories.jsx';
import FunFactSection from './Funfact.jsx';
import CoursesSectionTwo from './Course.jsx';
import ClientHomeOne from './Client.jsx';
import FaqSection from './FaqHomeTwo.jsx';
import VideoSection from './VideoHomeTwo.jsx';
import SignupSectionTwo from './Signup.jsx';
import PricingSection from './Pricing.jsx';
import GallerySection from './Gallery.jsx';
import AboutSectionFour from './About2nd.jsx';
import EventSection from './Event.jsx';
import NewsSectionTwo from './News.jsx';
import SlideImage1 from '../../assets/images/pattern/p13.png';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <div 
        className="tm-boxed-layout" 
        style={{ backgroundImage: `url(${SlideImage1})` }} >
            <div className="page-wrapper">
                <HomeTwoHeaderBoxed action={drawerAction.toggle} />
                <ZeroHomeOne />
                <CategoriesSectionCurrentTwo />
                <AboutHomeTwo />
                <FunFactSection />
                <CoursesSectionTwo />
                <ClientHomeOne />
                <FaqSection />
                <VideoSection />
                <SignupSectionTwo />
                <PricingSection />
                <GallerySection />
                <FeatureHomeTwo />
                <AboutSectionFour />
                <EventSection />
                <NewsSectionTwo />
                <FooterHomeOne />
                <BackToTop />
            </div>
        </div>
    );
}

export default HomeTwo;
