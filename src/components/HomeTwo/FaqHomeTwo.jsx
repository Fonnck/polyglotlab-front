import React, { useState } from 'react';
import FaqImage from '../../assets/images/resource/faq.png';
import BackgroundImage from '../../assets/images/background/5.jpg';

function FaqSection({ className }) {
    const [showQues, setQues] = useState(1);

    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <section className={`faqs-section ${className || ''}`}>
            <div
                className="bg-image"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div className="auto-container">
                <div className="row">
                    {/* FAQ Column */}
                    <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="faq-bg"></div>
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Our faqs</span>
                                <h2>Frequently asked some questions?</h2>
                            </div>

                            <ul className="accordion-box wow fadeInRight">
                                {/* Question 1 */}
                                <li
                                    onClick={() => openQuestion(1)}
                                    className={`accordion block ${showQues === 1 ? 'active-block' : ''}`}
                                >
                                    <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                        Where should I study abroad?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                Online courses are easily accessible on much smaller budgets. In addition to
                                                the convenience and the cost, a large number of students are turning to
                                                online learning courses.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Question 2 */}
                                <li
                                    onClick={() => openQuestion(2)}
                                    className={`accordion block ${showQues === 2 ? 'active-block' : ''}`}
                                >
                                    <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                        Why do students prefer online learning?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                Online courses are easily accessible on much smaller budgets. In addition to
                                                the convenience and the cost, a large number of students are turning to
                                                online learning courses.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Question 3 */}
                                <li
                                    onClick={() => openQuestion(3)}
                                    className={`accordion block ${showQues === 3 ? 'active-block' : ''}`}
                                >
                                    <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                        How can I contact a school directly?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                Online courses are easily accessible on much smaller budgets. In addition to
                                                the convenience and the cost, a large number of students are turning to
                                                online learning courses.
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Question 4 */}
                                <li
                                    onClick={() => openQuestion(4)}
                                    className={`accordion block ${showQues === 4 ? 'active-block' : ''}`}
                                >
                                    <div className={`acc-btn ${showQues === 4 ? 'active' : ''}`}>
                                        How do I find a school where I want to study?
                                        <div className="icon fa fa-angle-right"></div>
                                    </div>
                                    <div className={`acc-content ${showQues === 4 ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">
                                                Online courses are easily accessible on much smaller budgets. In addition to
                                                the convenience and the cost, a large number of students are turning to
                                                online learning courses.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12">
                        <div className="inner-column">
                            <figure className="image">
                                <img src={FaqImage} alt="FAQ" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
