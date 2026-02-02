import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing images
import CourseImage1 from '../../assets/images/resource/course-1.jpg';
import CourseImage2 from '../../assets/images/resource/course-2.jpg';
import CourseImage3 from '../../assets/images/resource/course-3.jpg';
import CourseImage4 from '../../assets/images/resource/course-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 4 },
        1350: { slidesPerView: 4 },
    },
};

function CoursesSection() {
    return (
        <section id="courses" className="courses-section">
            <div className="auto-container">
                <div className="anim-icons">
                    <span className="icon icon-e wow zoomIn"></span>
                </div>

                <div className="sec-title">
                    <span className="sub-title">Popular Courses</span>
                    <h2>Pick a course to<br /> get started with your study</h2>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="courses-carousel owl-theme default-nav">
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage1} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage2} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage3} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage4} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage1} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage2} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage3} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/course-details">
                                            <img src={CourseImage4} alt="Course 1" />
                                        </Link>
                                    </figure>
                                    <span className="price">$49.00</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book"></i> 8 Lessons</li>
                                        <li><i className="fa fa-users"></i> 16 Students</li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/course-details">Starting SEO as your home-based business</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 / 8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <div className="duration"><i className="fa fa-clock"></i> 3 Weeks</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        
                    </Swiper>
                </div>

                <div className="bottom-text">
                    <div className="content">
                        <strong>23,000+</strong> more skillful courses you can explore 
                        <Link to="/course" className="theme-btn btn-style-one small">Explore All Courses</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoursesSection;
