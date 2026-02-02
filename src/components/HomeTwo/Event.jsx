import React from 'react';
import { Link } from 'react-router-dom';
// Import your images
import EventImage1 from '../../assets/images/resource/event-1.jpg';
import EventImage2 from '../../assets/images/resource/event-2.jpg';
import EventImage3 from '../../assets/images/resource/event-3.jpg';
import EventImage4 from '../../assets/images/resource/event-4.jpg';

function EventSection() {
    return (
        <section className="event-section">
            <div className="anim-icons">
                <span className="icon icon-dotted-map-3"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title-outer">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="sec-title">
                                <span className="sub-title">Latest Events</span>
                                <h2>Our Latest Upcoming<br /> Events List</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Event Block */}
                    <div className="event-block col-lg-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <div className="image-box">
                                    <figure className="image"><img src={EventImage1} alt="Event 1" /></figure>
                                    <span className="date">20 <br /> May</span>
                                </div>
                                <h5 className="title"><Link to="/about-us">Starting SEO as your home based business</Link></h5>
                                <ul className="post-info">
                                    <li><i className="icon lnr-icon-history"></i><span>Time:</span> 11:00am 02:00pm</li>
                                    <li><i className="icon lnr-icon-location"></i><span>Location:</span> England</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Event Block */}
                    <div className="event-block col-lg-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <div className="image-box">
                                    <figure className="image"><img src={EventImage2} alt="Event 2" /></figure>
                                    <span className="date">20 <br /> May</span>
                                </div>
                                <h5 className="title"><Link to="/about-us">Starting SEO as your home based business</Link></h5>
                                <ul className="post-info">
                                    <li><i className="icon lnr-icon-history"></i><span>Time:</span> 11:00am 02:00pm</li>
                                    <li><i className="icon lnr-icon-location"></i><span>Location:</span> England</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Event Block */}
                    <div className="event-block col-lg-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <div className="image-box">
                                    <figure className="image"><img src={EventImage3} alt="Event 3" /></figure>
                                    <span className="date">20 <br /> May</span>
                                </div>
                                <h5 className="title"><Link to="/about-us">Starting SEO as your home based business</Link></h5>
                                <ul className="post-info">
                                    <li><i className="icon lnr-icon-history"></i><span>Time:</span> 11:00am 02:00pm</li>
                                    <li><i className="icon lnr-icon-location"></i><span>Location:</span> England</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Event Block */}
                    <div className="event-block col-lg-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <div className="image-box">
                                    <figure className="image"><img src={EventImage4} alt="Event 4" /></figure>
                                    <span className="date">20 <br /> May</span>
                                </div>
                                <h5 className="title"><Link to="/about-us">Starting SEO as your home based business</Link></h5>
                                <ul className="post-info">
                                    <li><i className="icon lnr-icon-history"></i><span>Time:</span> 11:00am 02:00pm</li>
                                    <li><i className="icon lnr-icon-location"></i><span>Location:</span> England</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventSection;
