import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news-1.jpg';
import NewsImage2 from '../../assets/images/resource/news-2.jpg';
import NewsImage3 from '../../assets/images/resource/news-3.jpg';

function News() {
    return (
        <section className="">
            <div class="container pb-70">
            <div className="row">
                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/news-details">
                                    <img src={NewsImage1} alt="News 1" />
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
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/news-details">
                                    <img src={NewsImage2} alt="News 2" />
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
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/news-details">
                                    <img src={NewsImage3} alt="News 3" />
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
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default News;
