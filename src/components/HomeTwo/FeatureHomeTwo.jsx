import React from 'react';
import { Link } from 'react-router-dom';

// Import your images
import Feature1 from '../../assets/images/resource/feature-1.png';
import Feature2 from '../../assets/images/resource/feature-2.png';
import Feature3 from '../../assets/images/resource/feature-3.png';

function FeaturesSectionTwo() {
    return (
        <section className="features-section-two pt-0">
            <div className="anim-icons">
                <span className="icon icon-shape-1 zoom-one"></span>
                <span className="icon icon-shape-2 zoom-one"></span>
                <span className="icon icon-e zoom-one"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Advantages</span>
                    <h2>You’ve come to the right <br /> place to learn</h2>
                </div>
                <div className="row">
                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature1} alt="135,00 courses" />
                            </figure>
                            <h4 className="title">
                                <Link to="/about-us">135,00 courses</Link>
                            </h4>
                            <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                        </div>
                    </div>

                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature2} alt="Industry instructors" />
                            </figure>
                            <h4 className="title">
                                <Link to="/about-us">Industry instructors</Link>
                            </h4>
                            <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                        </div>
                    </div>

                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature3} alt="Lifetime access" />
                            </figure>
                            <h4 className="title">
                                <Link to="/about-us">Lifetime access</Link>
                            </h4>
                            <div className="text">Whether you want to learn or to share what you know, you’ve come to the right place.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionTwo;
