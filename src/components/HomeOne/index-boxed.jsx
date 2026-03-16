import React from "react";
import useToggle from "../../hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "./FooterHomeOne.jsx";
import ZeroHomeOne from "./ZeroHomeOne.jsx";
import AboutHomeOne from "./AboutHomeOne.jsx";
import ClientHomeOne from "./ClientHomeOne.jsx";
import CallToActionHomeOne from "./CallToActionHomeOne.jsx";
import HomeOneHeaderBoxed from "./HomeOneHeaderBoxed.jsx";
import TestimonialSection from "./TestimonialHomeOne.jsx";
import FeaturesSection from "./Feature.jsx";
import AboutSection from "./About2nd.jsx";
import CoursesSection from "./Course.jsx";
import CategoriesSection from "./Categories.jsx";
import SignupSection from "./Signup.jsx";
import TeamSection from "./Team.jsx";
import CountdownSection from "./Countdown.jsx";
import NewsSection from "./News.jsx";
import SlideImage1 from "../../assets/images/pattern/p13.png";

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <div
      className="tm-boxed-layout"
      style={{ backgroundImage: `url(${SlideImage1})` }}
    >
      <div className="page-wrapper">
        <HomeOneHeaderBoxed action={drawerAction.toggle} />
        <ZeroHomeOne />
        <AboutHomeOne />
        <CoursesSection />
        <FeaturesSection />
        <CategoriesSection />
        <SignupSection />
        <TeamSection />
        <CallToActionHomeOne />
        <TestimonialSection />
        <AboutSection />
        <CountdownSection />
        <NewsSection />
        <ClientHomeOne />
        <FooterHomeOne />
        <BackToTop />
      </div>
    </div>
  );
}

export default HomeOne;
