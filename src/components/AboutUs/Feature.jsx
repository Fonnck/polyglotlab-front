import React from 'react';

function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="auto-container">
                <div className="row">
                    <div className="feature-block col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <i className="icon flaticon-online-learning"></i>
                            <h5 className="title">Online<br /> Certifications</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <i className="icon flaticon-elearning"></i>
                            <h5 className="title">Top<br /> Instructors</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <i className="icon flaticon-web-2"></i>
                            <h5 className="title">Unlimited <br />Online Courses</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <i className="icon flaticon-users"></i>
                            <h5 className="title">Experienced <br />Members</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
