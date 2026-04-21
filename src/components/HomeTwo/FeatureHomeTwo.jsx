/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// Import your images
import Feature1 from '../../assets/images/resource/feature-1.png';
import Feature2 from '../../assets/images/resource/feature-2.png';
import Feature3 from '../../assets/images/resource/feature-3.png';

function FeaturesSectionTwo() {
    return (
        <section className="features-section-two pt-0">
            <div className="anim-icons">
                <span className="icon icon-shape-1 zoom-one"></span>
                <span className="icon icon-shape-2 zoom-one"></span>
                <span className="icon icon-e zoom-one"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Nuestras Ventajas</span>
                    <h2>Has llegado al lugar correcto <br /> para aprender</h2>
                </div>
                <div className="row">
                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature1} alt="135,00 courses" />
                            </figure>
                            <h4 className="title">
                                <Link>Motivation</Link>
                            </h4>
                            <div className="text">
                                Fomentamos el interés por el proceso de aprendizaje,
                                fortalecemos la confianza de nuestros estudiantes
                                y los motivamos a enfrentar retos y presentar proyectos
                                que impulsen su crecimiento y dominio del idioma.
                            </div>
                        </div>
                    </div>

                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature2} alt="Industry instructors" />
                            </figure>
                            <h4 className="title">
                                <Link to="/about-us">Teaching<br />Methodology</Link>
                            </h4>Nuestra metodología impulsa el desarrollo de la creatividad a través del outdoor learning, promoviendo el pensamiento crítico, la conciencia ambiental y el trabajo en equipo como pilares del aprendizaje.
                            <div className="text"></div>
                        </div>
                    </div>

                    {/* Feature Block */}
                    <div className="feature-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <figure className="image">
                                <img src={Feature3} alt="Lifetime access" />
                            </figure>
                            <h4 className="title">
                                <Link to="/about-us">Educational Support</Link>
                            </h4>
                            <div className="text">
                                Contamos con docentes especializados,
                                recursos pedagógicos certificados y un sistema de refuerzo continuo que,
                                apoyado en tecnología,
                                garantiza un acompañamiento eficaz y constante en el aprendizaje.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionTwo;
