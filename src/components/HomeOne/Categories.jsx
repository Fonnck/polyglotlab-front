import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesSection() {
    return (
        <section className="categories-section-current">
            <div className="auto-container">
                <div className="anim-icons">
                    <span className="icon icon-group-1 bounce-y"></span>
                    <span className="icon icon-group-2 bounce-y"></span>
                </div>

                <div className="sec-title text-center">
                    <span className="sub-title">Checkout our categories</span>
                    <h2>Top categories for popular <br />courses to show</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-student-2"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Business <br />Management</Link></h6>
                        </div>
                    </div>
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-stationary"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Arts and <br />Design</Link></h6>
                        </div>
                    </div>
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-online-learning"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Computer <br />Science</Link></h6>
                        </div>
                    </div>
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-study"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Personal <br />Development</Link></h6>
                        </div>
                    </div>
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-pie-chart"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Business and <br />Finance</Link></h6>
                        </div>
                    </div>
                    <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-web-2"></i>
                            </div>
                            <h6 className="title"><Link to="/course-details">Video and <br />Photography</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;
