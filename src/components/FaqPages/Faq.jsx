import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
function Faq({ className }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "How to soft launch your business?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "Is my technology allowed on tech?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How to turn visitors into contributors?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How can I find my solutions?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
    ];

    return (
        <>
        <HomeOneHeader /><HeroPageTitle
        title="FAQ"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/faq', title: 'FAQ' },
        ]}
     />
        <section className={`faq-section ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="accordion-box wow fadeInRight">
                            {faqs.map((faq, index) => (
                                <li
                                    key={index}
                                    className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                >
                                    <div
                                        className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {faq.question}
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">{faq.answer}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <FooterHomeOne />
        <BackToTop />
        </>
    );
}

export default Faq;
