import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-2.png';
import backgroundImage from '../../assets/images/background/4.jpg';

function FooterHomeOne({ className }) {
    return (
        <footer className={`main-footer ${className || ''}`}>
            <div 
                className="bg-image zoom-two" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Footer Column - About */}
                        <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                                <div className="text">Get 26,000+ best online courses from us</div>
                                <ul className="social-icon-two">
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Explore */}
                        <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Explore</h4>
                                <ul className="user-links">
                                    <li><Link to="#">Gallery</Link></li>
                                    <li><Link to="#">News & Articles</Link></li>
                                    <li><Link to="#">FAQ's</Link></li>
                                    <li><Link to="#">Sign In/Registration</Link></li>
                                    <li><Link to="#">Coming Soon</Link></li>
                                    <li><Link to="#">Contacts</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Links */}
                        <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Links</h4>
                                <ul className="user-links">
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Courses</Link></li>
                                    <li><Link to="#">Instructor</Link></li>
                                    <li><Link to="#">Events</Link></li>
                                    <li><Link to="#">Instructor Profile</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column - Contact */}
                        <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h4 className="widget-title">Contact</h4>
                                <div className="widget-content">
                                    <ul className="contact-info">
                                        <li><i className="fa fa-phone-square"></i> <Link to="tel:+926668880000">+92 (0088) 6823</Link></li>
                                        <li><i className="fa fa-envelope"></i> <Link to="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                        <li><i className="fa fa-map-marker-alt"></i> 80 Brooklyn Golden Street. New York. USA</li>
                                    </ul>
                                    <div className="subscribe-form">
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                <button type="button" className="theme-btn btn-style-one">
                                                    <i className="fa fa-long-arrow-alt-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">&copy; Copyright reserved by <Link to="/">kodesolution.com</Link></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
