import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import news1 from '../../assets/images/resource/news-1.jpg'; 
import news2 from '../../assets/images/resource/news-2.jpg'; 
import news3 from '../../assets/images/resource/news-3.jpg'; 

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
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
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    },
};

function NewsSectionTwo({ className }) {
    return (
        <section id="news" className={`news-section-two ${className || ''}`}>
            <div className="anim-icons">
                <span className="icon icon-dotted-map-4"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-xl-4 col-lg-4 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title mb-0">
                                <span className="sub-title">directly from blog</span>
                                <h2>Our latest news & upcoming blog posts</h2>
                                <div className="text">Quisque commodo, magna nec accu man euismod tellus mi ornare enim.</div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                        <div className="carousel-outer">
                            <div className="news-carousel">
                                <Swiper {...swiperOptions} className="news-carousel">
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news1} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news2} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news3} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news1} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news2} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="news-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link to="/news-details">
                                                        <img src={news3} alt="" />
                                                    </Link>
                                                </figure>
                                                <span className="date"><b>20</b> SEP</span>
                                            </div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user"></i> by Admin</li>
                                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                                    </ul>
                                                    <h4 className="title">
                                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                                    </h4>
                                                    <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSectionTwo;
