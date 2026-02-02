import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image1 from '../../assets/images/resource/testi-thumb-1.jpg'; 
import Image2 from '../../assets/images/resource/testi-thumb-2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    },
};

function TestimonialSection() {
    return (
        <section className="testimonial-section">
            <div className="anim-icons">
                <span className="icon icon-dotted-map-2"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-xl-4 col-lg-5">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Our testimonials</span>
                                <h2>What they’re <br /> saying about our <br /> courses</h2>
                                <div className="text">Quisque commodo, magna nec accu man euismod tellus mi ornare enim.</div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-column col-xl-8 col-lg-7">
                        <div className="carousel-outer">
                            <Swiper {...swiperOptions} className="testimonial-carousel">
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb">
                                                <img src={Image1} alt="" />
                                            </figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            <div className="info-box">
                                                <span className="icon-quote"></span>
                                                <h4 className="name">Jame sickres</h4>
                                                <span className="designation">Market Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb">
                                                <img src={Image2} alt="" />
                                            </figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            <div className="info-box">
                                                <span className="icon-quote"></span>
                                                <h4 className="name">Aleesha brown</h4>
                                                <span className="designation">Market Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb">
                                                <img src={Image1} alt="" />
                                            </figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            <div className="info-box">
                                                <span className="icon-quote"></span>
                                                <h4 className="name">Jame sickres</h4>
                                                <span className="designation">Market Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb">
                                                <img src={Image2} alt="" />
                                            </figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="text">
                                                Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            <div className="info-box">
                                                <span className="icon-quote"></span>
                                                <h4 className="name">Aleesha brown</h4>
                                                <span className="designation">Market Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
