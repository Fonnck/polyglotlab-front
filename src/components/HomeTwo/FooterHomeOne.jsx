/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-2.png";
import backgroundImage from "../../assets/images/background/4.jpg";
import Whatsapp from "../../assets/images/icons/whatsapp.png";
import Email from "../../assets/images/icons/email.png";
import Location from "../../assets/images/icons/location.png";
import { FaTiktok } from "react-icons/fa";

function FooterHomeOne({ className }) {
  return (
    <footer className={`main-footer ${className || ""}`}>
      <div
        className="bg-image zoom-two"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row d-flex justify-content-between">
            {/* Footer Column - About */}
            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="text">
                  More than languages, une expérience humaine
                </div>
                <ul className="social-icon-two">
                  <li>
                    <Link to="#">
                      <FaTiktok />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/polyglotlabacademy/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Column - Explore */}
            {/* <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4 className="widget-title">Explore</h4>
                <ul className="user-links">
                  <li>
                    <Link to="#">Gallery</Link>
                  </li>
                  <li>
                    <Link to="#">News & Articles</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="#">Sign In/Registration</Link>
                  </li>
                  <li>
                    <Link to="#">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="#">Contacts</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Footer Column - Links */}
            {/* <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h4 className="widget-title">Links</h4>
                <ul className="user-links">
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Courses</Link>
                  </li>
                  <li>
                    <Link to="#">Instructor</Link>
                  </li>
                  <li>
                    <Link to="#">Events</Link>
                  </li>
                  <li>
                    <Link to="#">Instructor Profile</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Footer Column - Contact */}
            <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h4 className="widget-title">Contacto</h4>
                <div className="widget-content">
                  <ul className="contact-info d-flex flex-column gap-4">
                    <li>
                      <a href="https://wa.link/ri3zlj" target="_blank">
                        <div className="contact-info-box pointer">
                          {/* <i className="icon lnr-icon-phone-handset"></i> */}
                          <img
                            className="icon lnr-icon-phone-handset"
                            src={Whatsapp}
                            alt="wspicon"
                            width={40}
                          />
                          <span className="title">Escribenos o llamanos</span>
                          <Link to="https://wa.link/ri3zlj" className="text">
                            + 57 (315) - 471 86 19
                          </Link>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:contacto@polyglotlabacademy.com
        ?subject=Consulta%20sobre%20programas%20de%20idiomas
        &body=Hola%20Polyglot%20Lab%2C%0A%0AMe%20gustaría%20recibir%20más%20información."
                        target="_blank"
                      >
                        <div className="contact-info-box pointer">
                          {/* <i className="icon lnr-icon-envelope1"></i> */}
                          <img
                            className="icon lnr-icon-phone-handset"
                            src={Email}
                            alt="wspicon"
                            width={45}
                          />
                          <span className="title">Contactanos</span>
                          <Link
                            to="mailto:contacto@polyglotlabacademy.com"
                            className="text"
                          >
                            contacto@polyglotlabacademy.com
                          </Link>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="contact-info-box pointer">
                        {/* <i className="icon lnr-icon-map-marker"></i> */}
                        <a
                          href="https://maps.app.goo.gl/xsWMfi5n1Ye3tZuD8"
                          target="_blank"
                        >
                          <img
                            className="icon lnr-icon-phone-handset"
                            src={Location}
                            alt="wspicon"
                            width={40}
                          />
                          <span className="title">Bucaramanga</span>
                          <Link
                            to="https://maps.app.goo.gl/xsWMfi5n1Ye3tZuD8"
                            className="text"
                          >
                            Bucaramanga, Colombia
                          </Link>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="subscribe-form">
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
                          placeholder="Correo Eletrónico"
                          required
                        />
                        <button
                          type="button"
                          className="theme-btn btn-style-one"
                        >
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              &copy; Copyright reservado{" "}
              <Link to="https://codexdiamonds.com">
                | Diseñado por CodexDiamonds✨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterHomeOne;
