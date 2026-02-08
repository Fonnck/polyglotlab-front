/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/images/background/4.jpg";
import CtaImage from "../../assets/images/resource/schoolchildren.png";

function CallToAction({ className }) {
  return (
    <section
      className={`call-to-action ${className || ""}`}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="anim-icons">
        <span className="icon icon-calculator zoom-one"></span>
        <span className="icon icon-pin-clip zoom-one"></span>
        <span className="icon icon-dots"></span>
      </div>

      <div className="auto-container">
        <div className="row">
          <div className="title-column col-lg-8">
            <div className="inner-column">
              <div className="sec-title light">
                <span className="style-font">Get your quality</span>
                <h1>
                  Skills certificate <br />
                  from the edulerns
                </h1>
                <Link to="/course-details" className="theme-btn btn-style-one">
                  <span className="btn-title">Get started now</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="image-column col-lg-4">
            <figure className="image">
              <img src={CtaImage} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
