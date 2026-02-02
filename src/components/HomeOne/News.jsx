import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import news1 from '../../assets/images/resource/news-1.jpg';
import news2 from '../../assets/images/resource/news-2.jpg';
import news3 from '../../assets/images/resource/news-3.jpg';

function NewsSection({ className }) {
    return (
        <section id="news" className={`news-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">directly from blog</span>
                    <h2>
                        Our latest news &<br />
                        upcoming blog posts
                    </h2>
                </div>

                <div className="row">
                    {/* News Block 1 */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={news1} alt="News 1" />
                                    </Link>
                                </figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title">
                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                    </h4>
                                    <Link to="/news-details" className="read-more">
                                        Read More <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Block 2 */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={news2} alt="News 2" />
                                    </Link>
                                </figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title">
                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                    </h4>
                                    <Link to="/news-details" className="read-more">
                                        Read More <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Block 3 */}
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={news3} alt="News 3" />
                                    </Link>
                                </figure>
                                <span className="date"><b>20</b> SEP</span>
                            </div>
                            <div className="content-box">
                                <div className="content">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user"></i> by Admin</li>
                                        <li><i className="fa fa-comments"></i> 2 Comments</li>
                                    </ul>
                                    <h4 className="title">
                                        <Link to="/news-details">The quality role of the elementary teacher in education</Link>
                                    </h4>
                                    <Link to="/news-details" className="read-more">
                                        Read More <i className="fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
