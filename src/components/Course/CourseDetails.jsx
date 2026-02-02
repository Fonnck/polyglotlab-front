import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';

import CourseDtlsImg from '../../assets/images/resource/course-details.jpg';

import CourseImg1 from '../../assets/images/resource/course-1.jpg';
import CourseImg2 from '../../assets/images/resource/course-2.jpg';
import CourseImg3 from '../../assets/images/resource/course-3.jpg';

function CourseDetails() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Course Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/course-details', title: 'Course Details' },
                ]}
            />
            <section className="course-details">
                <div className="container">
                    <div className="row flex-xl-row-reverse">
                        {/* Courses Details Content */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="courses-details__content">
                                <img src={CourseDtlsImg} alt="" /> 
                                <h2 className="mt-4">course Overview</h2>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.</p>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What You Will Learn?</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="row mt-30">
                                        {/*<!-- Category Block Two -->*/}
                                        <div className="category-block-current-two col-lg-4 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-elearning"></i>
                                                </div>
                                                <h4 className="title">Online degree programs</h4>
                                                <span className="sub-title">26 Courses</span>
                                            </div>
                                        </div>

                                        {/*<!-- Category Block Two -->*/}
                                        <div className="category-block-current-two col-lg-4 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study-1"></i>
                                                </div>
                                                <h4 className="title">Non-degree programs</h4>
                                                <span className="sub-title">38 Courses</span>
                                            </div>
                                        </div>

                                        {/*<!-- Category Block Two -->*/}
                                        <div className="category-block-current-two col-lg-4 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study"></i>
                                                </div>
                                                <h4 className="title">Off campus programs</h4>
                                                <span className="sub-title">13 Courses</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Is my technology allowed on tech?
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>How to soft launch your business?
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>How to turn visitors into contributors
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?
                                                <div className="icon fa fa-plus" />
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Courses Details Content */}
                        {/* Start Courses Details Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-sidebar">
                                <ul className="course-details-info">
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-clock"></i></span>
                                        Durations: <span>10 hours</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-folder-open"></i></span>
                                        Lectures: <span>15</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-user-circle"></i></span>
                                        Students: <span>Max 50</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-flag"></i></span>
                                        Skill Level: <span>Advanced</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon"><i className="far fa-bell"></i></span>
                                        Language: <span>English</span>
                                    </li>
                                </ul>

                                <div className="course-details-price">
                                    <p className="course-details-price-text">Course price</p>
                                    <p className="course-details-price-amount">$18.00</p>
                                    <Link to="/contact" className="theme-btn btn-style-two course-details-price-btn">Buy This Course</Link>
                                </div>

                                <div className="latest-course mb-30">
                                    <h4 className="latest-course-title mb-30">New Courses</h4>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src={CourseImg1} alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <Link to="#" className="latest-course-author">by <span>Advanced</span></Link>
                                            <h5><Link to="/course-details">Modern Languages</Link></h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src={CourseImg2} alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <Link to="#" className="latest-course-author">by <span>Advanced</span></Link>
                                            <h5><Link to="/course-details">Modern Technologies</Link></h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-course-item">
                                        <div className="latest-course-img">
                                            <img src={CourseImg3} alt="" />
                                        </div>
                                        <div className="latest-course-content">
                                            <Link to="#" className="latest-course-author">by <span>Advanced</span></Link>
                                            <h5><Link to="/course-details">Development Studies</Link></h5>
                                            <div className="latest-course-stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* End Start Courses Details Sidebar */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default CourseDetails;
