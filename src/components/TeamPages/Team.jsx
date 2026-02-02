import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';
import TeamImg4 from '../../assets/images/resource/team-4.jpg';

function Team() {
    return (
        <section className="team-section">
            <div className="auto-container">
                <div className="row">
                    {/* Team block */}
                    <div className="team-block col-lg-3 col-md-6">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg1} alt="Edward Norton" />
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
                                <h4 className="name">
                                    <Link to="/team-details">Edward Norton</Link>
                                </h4>
                                <span className="designation">Musician</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-md-6">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg2} alt="Jane Seymour" />
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
                                <h4 className="name">
                                    <Link to="/team-details">Jane Seymour</Link>
                                </h4>
                                <span className="designation">Designer</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-md-6">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg3} alt="Mike Hardson" />
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
                                <h4 className="name">
                                    <Link to="/team-details">Mike Hardson</Link>
                                </h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-md-6">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg4} alt="Christine Eve" />
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
                                <h4 className="name">
                                    <Link to="/team-details">Christine Eve</Link>
                                </h4>
                                <span className="designation">Artist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
