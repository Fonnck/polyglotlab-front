import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg1 from '../../assets/images/resource/about-1.png'; 
import aboutImg2 from '../../assets/images/resource/about-2.jpg';

function AboutSection({ className }) {
    return (
        <section className={`about-section ${className || ''}`}>
            <div className="anim-icons">
                <span className="icon icon-dotted-map"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Get to know us</span>
                                <h2>Grow your skills learn with us from anywhere</h2>
                                <div className="text">
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend molestie metus pharetra eleifend.
                                </div>
                            </div>
                            <ul className="list-style-one two-column">
                                <li><i className="icon fa fa-check"></i> Expert trainers</li>
                                <li><i className="icon fa fa-check"></i> Online learning</li>
                                <li><i className="icon fa fa-check"></i> Lifetime access</li>
                                <li><i className="icon fa fa-check"></i> Great results</li>
                            </ul>
                            <div className="btn-box">
                                <Link to="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12">
                        <div className="anim-icons">
                            <span className="icon icon-dotted-map-2"></span>
                            <span className="icon icon-paper-plan"></span>
                            <span className="icon icon-dotted-line"></span>
                        </div>
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1 overlay-anim wow fadeInUp">
                                <img src={aboutImg1} alt="About 1" />
                            </figure>
                            <figure className="image-2 overlay-anim wow fadeInRight">
                                <img src={aboutImg2} alt="About 2" />
                            </figure>
                            <div className="experience bounce-y">
                                <span className="count">16</span> Years of Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
