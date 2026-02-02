import React from 'react';
import { Link } from 'react-router-dom';

import TeamImage1 from '../../assets/images/resource/team-1.jpg';
import TeamImage2 from '../../assets/images/resource/team-2.jpg';
import TeamImage3 from '../../assets/images/resource/team-3.jpg';
import TeamImage4 from '../../assets/images/resource/team-4.jpg'; 

function TeamSection({ className }) {
    return (
        <section id="teachers" className={`team-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">qualified teachers</span>
                    <h2>Meet the teacher who <br />teaches you online</h2>
                </div>

                <div className="row">
                    {/* Team Block 1 */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImage1} alt="Edward Norton" />
                                    </Link>
                                </figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link to="/team-details">Edward Norton</Link></h4>
                                <span className="designation">Musician</span>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImage2} alt="Jane Seymour" />
                                    </Link>
                                </figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link to="/team-details">Jane Seymour</Link></h4>
                                <span className="designation">Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImage3} alt="Mike Hardson" />
                                    </Link>
                                </figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link to="/team-details">Mike Hardson</Link></h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>

                    {/* Team Block 4 */}
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImage4} alt="Christine Eve" />
                                    </Link>
                                </figure>
                                <span className="share-icon fa fa-share-alt"></span>
                                <div className="social-links">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link to="/team-details">Christine Eve</Link></h4>
                                <span className="designation">Artist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
