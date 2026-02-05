import React from "react";
import useToggle from "../../hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "./FooterHomeOne.jsx";
import ZeroHomeOne from "./ZeroHomeOne.jsx";
import AboutHomeOne from "./AboutHomeOne.jsx";
import ClientHomeOne from "./ClientHomeOne.jsx";
import CallToActionHomeOne from "./CallToActionHomeOne.jsx";
import HomeOneHeaderSingle from "./HomeOneHeaderSingle.jsx";
import TestimonialSection from "./TestimonialHomeOne.jsx";
import FeaturesSection from "./Feature.jsx";
import AboutSection from "./About2nd.jsx";
import CoursesSection from "./Course.jsx";
import CategoriesSection from "./Categories.jsx";
import SignupSection from "./Signup.jsx";
import TeamSection from "./Team.jsx";
import CountdownSection from "./Countdown.jsx";
import NewsSection from "./News.jsx";
import ContactSection from "./Contact.jsx";
import MapSection from "./Map.jsx";

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <HomeOneHeaderSingle action={drawerAction.toggle} />
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
      <ContactSection />
      <MapSection />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeOne;
