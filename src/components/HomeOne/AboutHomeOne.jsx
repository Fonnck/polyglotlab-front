/* eslint-disable react/prop-types */
import aboutImage1 from "../../assets/images/resource/about-1.jpg";
import aboutImage2 from "../../assets/images/resource/about-2.png";

function AboutSection({ className }) {
  return (
    <section id="about" className={`about-section ${className || ""}`}>
      <div className="anim-icons">
        <span className="icon icon-dotted-map"></span>
      </div>

      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-lg-6 order-2 wow fadeInRight"
            data-wow-delay="600ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Estudia con Nosotros</span>
                <h2>Somos la mejor
                  opción para las familias cuando educar va más allá del contenido
                </h2>
                <div className="text">
                  Porque proyección hacia un mundo
                  interconectado se improvisa, se forma desde la infancia.
                </div>
              </div>

              <ul className="list-style-one two-column">
                <li>
                  <i className="icon fa fa-check"></i> Profesores Expertos
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Horarios Flexibles
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Educación de Calidad
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Resultados Garantizados
                </li>
              </ul>

              {/* <div className="btn-box">
                <Link to="/about-us" className="theme-btn btn-style-one">
                  <span className="btn-title">Discover more</span>
                </Link>
              </div> */}
              <div className="btn-box">
                <div className="theme-btn btn-style-one pointer">
                  <span className="btn-title">Inscribirme</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6">
            <div className="anim-icons">
              <span className="icon icon-dotted-map-2"></span>
              <span className="icon icon-paper-plan"></span>
              <span className="icon icon-dotted-line"></span>
            </div>
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1 overlay-anim wow fadeInUp">
                <img src={aboutImage1} alt="About 1" />
              </figure>
              <figure className="image-2 overlay-anim wow fadeInRight zoom-one">
                <img src={aboutImage2} alt="About 2" />
              </figure>
              <div className="experience bounce-y">
                <span className="count">16</span> Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
