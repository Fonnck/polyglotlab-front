import React from 'react';
import { Link } from 'react-router-dom';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';

function Pricing() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/pricing', title: 'Pricing' },
                ]}
            />
            <section className="pricing-section">
                <div className="anim-icons">
                    <span className="icon icon-group-1 bounce-y"></span>
                    <span className="icon icon-group-2 bounce-y"></span>
                </div>

                <div className="auto-container">
                    <div className="row">
                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$20.00</h1>
                                    <span className="title">basic pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrade options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link to="/pricing" className="theme-btn btn-style-one">
                                        <span className="btn-title">Choose Plan</span>
                                    </Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$30.00</h1>
                                    <span className="title">medium pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrade options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link to="/pricing" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Choose Plan</span>
                                    </Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Block */}
                        <div className="pricing-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="price-box">
                                    <h1 className="price">$40.00</h1>
                                    <span className="title">premium pack</span>
                                </div>
                                <ul className="features">
                                    <li>3 Full Courses</li>
                                    <li>Lifetime free support</li>
                                    <li>Upgrade options</li>
                                    <li>9 Days Time</li>
                                </ul>
                                <div className="btn-box">
                                    <Link to="/pricing" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Choose Plan</span>
                                    </Link>
                                    <span className="sub-title">No hidden charges!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Pricing;
