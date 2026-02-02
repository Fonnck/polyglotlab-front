import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';

function FunFactSection() {
    const percentage = 45.2; 
    const percentage1 = 32.4; 
    const percentage2 = 354; 
    const percentage3 = 99.9; 
    return (
        <section className="fun-fact-section pt-0">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter Block 1 */}
                        <div className="counter-block col-lg-3 col-md-6 wow fadeInUp">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                   {percentage}K
                                    </span>
                                </div>
                                <h6 className="counter-title">Student Enrolled</h6>
                            </div>
                        </div>
                        {/* Counter Block 2 */}
                        <div className="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                    {percentage1}K
                                    </span>
                                </div>
                                <h6 className="counter-title">Classes completed</h6>
                            </div>
                        </div>

                        {/* Counter Block 3 */}
                        <div className="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                     {percentage2}+
                                    </span>
                                </div>
                                <h6 className="counter-title">Top Instructors</h6>
                            </div>
                        </div>

                        {/* Counter Block 4 */}
                        <div className="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <div className="count-box">
                                    <span className="count-text">
                                    {percentage3}%
                                    </span>
                                </div>
                                <h6 className="counter-title">Satisfaction rate</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFactSection;
