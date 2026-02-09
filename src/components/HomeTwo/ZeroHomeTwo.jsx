import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideImage1 from "../../assets/images/main-slider/bg.jpg";
import MainImage from "../../assets/images/main-slider/main.png";
import Bulb from "../../assets/images/main-slider/icon/shape-01.png";
import Circle2 from "../../assets/images/main-slider/icon/icon-paper-pin.png";
import Circle3 from "../../assets/images/main-slider/icon/icon-circle-3.png";
import { scrollWithOffset } from "../../hooks/utils";
import { useScrollStore } from "../../hooks/useScrollSrore";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
};

function BannerSection() {
  const sectionRef = useScrollStore((state) => state.sectionRef);
  return (
    <section className="banner-section-two">
      <Swiper {...swiperOptions} className="banner-carousel">
        {/* Slide Item 1 */}
        <SwiperSlide className="slide-item">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${SlideImage1})` }}
          ></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="content-column col-lg-7 col-md-6">
                <div className="content-box">
                  <span className="sub-title">START TO NEW JOURNEY</span>
                  <h2 className="title animate-3">
                    The best <br />
                    program to <span className="style-font">enroll</span> <br />
                    for exchange
                  </h2>
                  <div className="tp-caption">
                    <div className="text">
                      World-class training and development programs{" "}
                      <br className="d-none d-lg-block" />
                      developed by top teachers
                    </div>
                  </div>
                  <div className="btn-box animate-4">
                    <div
                      className="theme-btn btn-style-one bg-theme-color2 pointer"
                      onClick={() => {
                        scrollWithOffset(sectionRef.current, 11);
                      }}
                    >
                      <span className="btn-title">Find Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-5 col-md-6 d-none d-md-block">
                <div className="image-box">
                  <figure className="image animate-5 zoom-two">
                    <img src={MainImage} alt="Main Image" />
                  </figure>
                  <figure className="cirkle cirkle-1 zoom-two">
                    <img src={Bulb} alt="Bulb Icon" />
                  </figure>
                  <figure className="cirkle cirkle-2 spin-one">
                    <img src={Circle2} alt="Circle Icon 2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="slide-item">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${SlideImage1})` }}
          ></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="content-column col-lg-7 col-md-6">
                <div className="content-box">
                  <span className="sub-title">START TO NEW JOURNEY</span>
                  <h2 className="title animate-3">
                    The best <br />
                    program to <span className="style-font">enroll</span> <br />
                    for exchange
                  </h2>
                  <div className="tp-caption">
                    <div className="text">
                      World-class training and development programs{" "}
                      <br className="d-none d-lg-block" />
                      developed by top teachers
                    </div>
                  </div>
                  <div className="btn-box animate-4">
                    <Link
                      to="/about-us"
                      className="theme-btn btn-style-one bg-theme-color2"
                    >
                      <span className="btn-title">Find Course</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-5 col-md-6 d-none d-md-block">
                <div className="image-box">
                  <figure className="image animate-5 animate-x">
                    <img src={MainImage} alt="Main Image" />
                  </figure>
                  <figure className="cirkle cirkle-1">
                    <img src={Bulb} alt="Bulb Icon" />
                  </figure>
                  <figure className="cirkle cirkle-2 animate-circle">
                    <img src={Circle2} alt="Circle Icon 2" />
                  </figure>
                  <figure className="cirkle cirkle-3 animate-circle">
                    <img src={Circle3} alt="Circle Icon 3" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default BannerSection;
