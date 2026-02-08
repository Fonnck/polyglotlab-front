/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import NotFoundImage from "../../assets/images/resource/404.jpg";
import { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle.js";
import CallToActionHomeOne from "../HomeOne/CallToActionHomeOne.jsx";
import TestimonialSection from "../HomeOne/TestimonialHomeOne.jsx";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader.jsx";
import Loader from "../Helper/Loader.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import BackToTop from "../BackToTop.jsx";

function Grace({ className }) {
  const [drawer, drawerAction] = useToggle(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  return (
    <>
      {loading && (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <HomeTwoHeader action={drawerAction.toggle} />
      <CallToActionHomeOne />
      <TestimonialSection />
      <FooterHomeOne />
      {/* <section className={`${className || ""}`}>
        <div className="auto-container pt-120 pb-70">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div className="error-page__title-box">
                  <img src={GraceImage} alt="Grace Image" />{" "}
                  <h3 className="error-page__sub-title">Page not found!</h3>
                </div>
                <p className="error-page__text">
                  Sorry we can't find that page! The page you are looking <br />{" "}
                  for was never existed.
                </p> <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <i className="lnr lnr-icon-magnifier"></i>
                    </button>
                  </div>
                </form> 
                <Link to="/" className="theme-btn btn-style-one shop-now">
                  <span className="btn-title">Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Grace;
