import React from 'react';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import testiThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import testiThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';



function Testimonial() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/testimonial', title: 'Testimonial' },
                ]}
            />
            <section>
            <div className="container pb-90">
                <div className="row">
                    {/* Testimonial Carousel */}
                    <div className="col-lg-6">
                        <div className="testimonial-block mb-md-30">
                            <div className="inner-box">
                                <div className="content-box">
                                    <figure className="thumb">
                                        <img src={testiThumb1} alt="Testimonial 1" />
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
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="content-box">
                                    <figure className="thumb">
                                        <img src={testiThumb2} alt="Testimonial 2" />
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
export default Testimonial;
