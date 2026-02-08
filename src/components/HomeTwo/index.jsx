/* eslint-disable no-unused-vars */
import React from "react";
import useToggle from "../../hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "./FooterHomeOne.jsx";
import ZeroHomeOne from "./ZeroHomeTwo.jsx";
import FeatureHomeTwo from "./FeatureHomeTwo.jsx";
import AboutHomeTwo from "./AboutHomeTwo.jsx";
import HomeTwoHeader from "./HomeTwoHeader.jsx";
import CategoriesSectionCurrentTwo from "./Categories.jsx";
import FunFactSection from "./Funfact.jsx";
import CoursesSectionTwo from "./Course.jsx";
import ClientHomeOne from "./Client.jsx";
import FaqSection from "./FaqHomeTwo.jsx";
import VideoSection from "./VideoHomeTwo.jsx";
import SignupSectionTwo from "./Signup.jsx";
import AboutHomeOne from "../HomeOne/AboutHomeOne.jsx";
import GallerySection from "./Gallery.jsx";
import AboutSectionFour from "./About2nd.jsx";
import EventSection from "./Event.jsx";
import NewsSectionTwo from "./News.jsx";

function HomeTwo() {
  // eslint-disable-next-line no-unused-vars
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <HomeTwoHeader action={drawerAction.toggle} />
      <ZeroHomeOne />
      {/* <CategoriesSectionCurrentTwo /> */}
      <img
        className="stickers-img"
        src="/src/assets/images/background/stickers.png"
        alt="Hero Image"
      />
      <VideoSection />
      <SignupSectionTwo />
      <AboutHomeOne />
      <ClientHomeOne />
      {/* <AboutHomeTwo /> */}
      <FunFactSection />
      {/* <CoursesSectionTwo /> */}
      {/* <PricingSection /> */}
      {/* <GallerySection /> */}
      <FeatureHomeTwo />
      <FaqSection />
      {/*   */}
      {/* <EventSection /> */}
      {/* <NewsSectionTwo /> */}
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeTwo;
