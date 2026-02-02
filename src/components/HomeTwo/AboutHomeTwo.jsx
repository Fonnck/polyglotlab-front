import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/resource/about-4.png';
function AboutSectionThree() {
    const percentage = 29; 
    return (
        <section id="about" className="about-section-three pt-0">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="anim-icons">
                                <span className="icon icon-dots-5 bounce-x"></span>
                                <span className="icon icon-dots-3 bounce-y"></span>
                                <span className="icon icon-star-2 spin-one"></span>
                            </div>
                            <div className="sec-title">
                                <span className="sub-title">About the company</span>
                                <h2>Over 36 years in distant learning for skills</h2>
                                <div className="text">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor
                                    incididunt labore dolore magna aliqua enim ad minim. Sed risus augue, commodo
                                    ornare felis non, eleifend molestie metus pharetra eleifend.
                                </div>
                            </div>
                            <ul className="list-style-two">
                                <li><i className="icon fa fa-book"></i> Flexible unlimited training programs</li>
                                <li><i className="icon fa fa-book"></i> Experience & qualified teachers</li>
                                <li><i className="icon fa fa-book"></i> Free incoming lessons</li>
                            </ul>
                            <div className="btn-box">
                                <div className="info-box">
                                    <div className="icon-box">
                                        <i className="icon flaticon-cup-1"></i>
                                        <div className="count-box">
                                            <span className="count-text">
                                                <CounterUp count= {percentage} />
                                            </span>
                                        </div>
                                    </div>
                                    <h6 className="counter-title">Wonderful awards</h6>
                                </div>
                                <Link to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover more</span>
                                </Link>
                                <span className="float-icon icon-arrow"></span>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="anim-icons">
                                <span className="icon icon-percent bounce-y"></span>
                                <span className="icon icon-star-1 spin-one"></span>
                                <span className="icon icon-dots-4 bounce-x"></span>
                                <span className="icon icon-wave"></span>
                                <span className="icon icon-idea bounce-y"></span>
                            </div>
                            <figure className="image overlay-anim wow fadeInUp">
                                <img src={Image} alt="About" />
                            </figure>
                            <div className="author-info bounce-x">
                                <h3 className="name">Aleesha Brown</h3>
                                <span className="designation">Maths teacher</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutSectionThree;
