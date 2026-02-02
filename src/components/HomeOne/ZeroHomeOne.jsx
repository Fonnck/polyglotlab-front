import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideImage1 from '../../assets/images/main-slider/1.jpg'; 
import MainImage from '../../assets/images/main-slider/image-1.png';
import Bulb from '../../assets/images/main-slider/icon/icon-circle-1.png';
import Circle2 from '../../assets/images/main-slider/icon/icon-circle-2.png';
import Circle3 from '../../assets/images/main-slider/icon/icon-circle-3.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
};
function BannerSection() {
    return (
        <section className="banner-section">
            <Swiper {...swiperOptions} className="banner-carousel">
                {/* Slide Item 1 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}></div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-7 col-md-10">
                                <div className="content-box">
                                    <span className="sub-title">START TO NEW JOURNEY</span>
                                    <h2 className="title animate-3">Best <span className="style-font">online</span> <br/>courses from <br/>eduLerns</h2>
                                    <div className="tp-caption">
                                        <div className="text">World-class training and development programs <br/>developed by top teachers</div>
                                    </div>
                                    <div className="btn-box animate-4">
                                        <Link to="/about-us" className="theme-btn btn-style-one alternate">
                                            <span className="btn-title">Explore More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column d-none d-lg-block col-md-5">
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
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}></div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-7 col-md-10">
                                <div className="content-box">
                                    <span className="sub-title">START TO NEW JOURNEY</span>
                                    <h2 className="title animate-3">Best <span className="style-font">online</span> <br/>courses from <br/>eduLerns</h2>
                                    <div className="tp-caption">
                                        <div className="text">World-class training and development programs <br/>developed by top teachers</div>
                                    </div>
                                    <div className="btn-box animate-4">
                                        <Link to="/about-us" className="theme-btn btn-style-one alternate">
                                            <span className="btn-title">Explore More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column d-none d-lg-block col-md-5">
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
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
export default BannerSection;
