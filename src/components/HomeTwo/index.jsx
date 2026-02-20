/* eslint-disable no-unused-vars */
import { useEffect } from "react";
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
import Stickers from "../../assets/images/background/stickers.png";
import { supabase } from "../../supabase/client.js";
import { useNavigate } from "react-router-dom";


function HomeTwo() {
  // eslint-disable-next-line no-unused-vars
  const [drawer, drawerAction] = useToggle(false);
  const nav = useNavigate();


  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event)
      if (event !== "SIGNED_IN") {
        if (!session) {
          nav("/");
        } else {
          nav("/products-sidebar");
        }
      }
    });
  }, []);

  return (
    <>
      <HomeTwoHeader action={drawerAction.toggle} />
      <ZeroHomeOne />
      {/* <CategoriesSectionCurrentTwo /> */}
      <img className="stickers-img" src={Stickers} alt="Hero Image" />
      <VideoSection />
      <SignupSectionTwo />
      {/* <AboutHomeOne /> */}
      <ClientHomeOne />
      {/* <AboutHomeTwo /> */}
      {/* <FunFactSection /> */}
      {/* <CoursesSectionTwo /> */}
      {/* <PricingSection /> */}
      {/* <GallerySection />
      <FeatureHomeTwo /> */}
      {/* <FaqSection /> */}
      {/*   */}
      {/* <EventSection /> */}
      {/* <NewsSectionTwo /> */}
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeTwo;
