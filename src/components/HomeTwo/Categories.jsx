import React from 'react';
import { Link } from 'react-router-dom';
function CategoriesSectionCurrentTwo() {
    return (
        <section className="categories-section-current-two">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">popular categories</span>
                    <h2>Providing online classes for <br />remote learning</h2>
                </div>
                <div className="row">
                    <div className="category-block-current-two col-lg-3 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-elearning"></i>
                            </div>
                            <h4 className="title"><Link to="/course-details">Online degree programs</Link></h4>
                            <span className="sub-title">26 Courses</span>
                        </div>
                    </div>
                    <div className="category-block-current-two col-lg-3 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-study-1"></i>
                            </div>
                            <h4 className="title"><Link to="/course-details">Non-degree programs</Link></h4>
                            <span className="sub-title">38 Courses</span>
                        </div>
                    </div>
                    <div className="category-block-current-two col-lg-3 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-study"></i>
                            </div>
                            <h4 className="title"><Link to="/course-details">Off campus programs</Link></h4>
                            <span className="sub-title">13 Courses</span>
                        </div>
                    </div>
                    <div className="category-block-current-two col-lg-3 col-sm-6">
                        <div className="inner-box">
                            <div className="icon-box">
                                <i className="icon flaticon-notebook"></i>
                            </div>
                            <h4 className="title"><Link to="/course-details">Business and <br />Finance</Link></h4>
                            <span className="sub-title">42 Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSectionCurrentTwo;
