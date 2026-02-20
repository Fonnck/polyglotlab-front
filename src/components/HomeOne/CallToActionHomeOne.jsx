/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/images/background/4.jpg";
import CtaImage from "../../assets/images/resource/schoolchildren.png";
import { useSignUp } from "../../hooks/useSignUp";

function CallToAction({ className }) {

  const { signOut } = useSignUp()

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
                <span className="style-font">¡Gracias por inscribirse!</span>
                <h1>
                  En breve nos pondremos <br />
                  en contacto
                </h1>
                <Link to="/" onClick={() => { signOut() }} className="theme-btn btn-style-three">
                  <span className="theme-btn btn-style-one bg-theme-color2 pointer">
                    Volver a la página principal
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="image-column col-lg-4">
            <figure className="image">
              <img src={CtaImage} alt="CtaImage2" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
