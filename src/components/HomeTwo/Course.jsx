/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import course1 from '../../assets/images/3n.jpg';
import course2 from '../../assets/images/2n.jpg';
import course3 from '../../assets/images/1n.jpg';

const features = [
    "3 horas por semana",
    "Énfasis en Language Skills & Soft Skills",
    "Seguimiento articulado al nivel",
    "Reportes personalizados",
    "Proyectos: Global Lab y Emotional Lab",
    "Exámenes periódicos y preparación para exámenes Cambridge y DELF"
];
const features2 = [
    "6 horas por semana",
    "Énfasis en Language Skills & Soft Skills",
    "Seguimiento articulado al nivel",
    "Reportes personalizados",
    "Proyectos: Global Lab y Emotional Lab",
    "Exámenes periódicos y preparación para exámenes Cambridge y DELF"
];
const features3 = [
    "Prueba de nivel",
    "Libro fisíco y acceso a plataforma digital",
    "Carpeta organizadora",
    "Cartillas articuladas a proyectos por módulo"
];

function CoursesSectionTwo({ className }) {
    return (
        <section id="courses" className={`courses-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="anim-icons">
                    <span className="icon icon-e wow zoomIn"></span>
                    <span className="icon icon-group-1 bounce-y"></span>
                    <span className="icon icon-group-2 bounce-y"></span>
                </div>

                <div className="sec-title text-center">
                    <span className="sub-title">Nuestros cursos</span>
                    <h2>Elige una opción para<br /> tu pequeño gigante</h2>
                </div>

                <div className="row">
                    {/* Course Block Two 1 */}
                    <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link>
                                        <img src={course1} alt="Course 1" />
                                    </Link>
                                </figure>
                                <span className="price">$185.000</span>
                                <div className="value">English o Francais (Un Idioma)</div>
                            </div>
                            <div className="content-box">
                                <ul className="course-info">
                                    {/* <li><i className="fa fa-book"></i> 8 Lessons</li>
                                    <li><i className="fa fa-users"></i> 16 Students</li> */}
                                    <li><i className="fa fa-clock"></i> 3 Horas por semana</li>
                                </ul>
                                <h5 className="title">
                                    <Link>Profundización 1 idioma Inglés o Francés</Link>
                                </h5>
                                <ul style={{ listStyleType: "disc" }} className="mt-3">
                                    {features.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: "8px" }}>
                                            * {" " + feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="other-info">
                                    <div className="rating-box">
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Block Two 2 */}
                    <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link>
                                        <img src={course2} alt="Course 2" />
                                    </Link>
                                </figure>
                                <span className="price">$285.000</span>
                                <div className="value">English y Francais (Dos Idiomas)</div>
                            </div>
                            <div className="content-box">
                                <ul className="course-info">
                                    {/* <li><i className="fa fa-book"></i> 8 Lessons</li>
                                    <li><i className="fa fa-users"></i> 16 Students</li> */}
                                    <li><i className="fa fa-clock"></i> 6 Horas por semana</li>
                                </ul>
                                <h5 className="title">
                                    <Link>Estudiantes Políglotas Inglés y Francés</Link>
                                </h5>
                                <ul style={{ listStyleType: "disc" }} className="mt-3">
                                    {features2.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: "8px" }}>
                                            * {" " + feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="other-info">
                                    <div className="rating-box">
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Block Two 3 */}
                    <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link>
                                        <img src={course3} alt="Course 3" />
                                    </Link>
                                </figure>
                                {/* <span className="price">$49.00</span> */}
                                <div className="value">Matrícula</div>
                            </div>
                            <div className="content-box">
                                {/* <ul className="course-info">
                                    <li><i className="fa fa-book"></i> 8 Lessons</li>
                                    <li><i className="fa fa-users"></i> 16 Students</li>
                                    <li><i className="fa fa-clock"></i> 3 Weeks</li>
                                </ul> */}
                                <h5 className="title">
                                    <Link>Inscribete a PolyglotLab</Link>
                                </h5>
                                <span>
                                    Grados de transición a noveno
                                </span>
                                <ul style={{ listStyleType: "disc" }} className="mt-3">
                                    {features3.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: "8px" }}>
                                            * {" " + feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="other-info mt-2">
                                    <div className="rating-box">
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CoursesSectionTwo;
