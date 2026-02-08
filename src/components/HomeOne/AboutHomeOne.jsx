/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
                <span className="sub-title">Get to know us</span>
                <h2>Grow your skills learn with us from anywhere</h2>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>

              <ul className="list-style-one two-column">
                <li>
                  <i className="icon fa fa-check"></i> Expert trainers
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Online learning
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Lifetime access
                </li>
                <li>
                  <i className="icon fa fa-check"></i> Great results
                </li>
              </ul>

              <div className="btn-box">
                <Link to="/about-us" className="theme-btn btn-style-one">
                  <span className="btn-title">Discover more</span>
                </Link>
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
              <figure className="image-2 overlay-anim wow fadeInRight">
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
