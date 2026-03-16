import BackgroundImage from "../../assets/images/background/3.jpg";

function SignupSection() {
  return (
    <section className="signup-section" id="scroll">
      <div className="auto-container">
        <div className="anim-icons">
          <span className="icon icon-paper-clip bounce-x"></span>
        </div>
        <div
          className="outer-box"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <span className="float-icon icon-pencil-line wow fadeInUp"></span>
          <div className="row">
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title light">
                <h2>
                  Sign up for a<br /> free trial lesson
                  <br /> by zoom
                </h2>
                <div className="text">
                  Quisque commodo, magna nec accu man euismod <br /> tellus mi
                  ornare enim, quis congue elit.
                </div>
              </div>
            </div>
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="signup-form wow fadeInLeft">
                  <form method="" action="" id="contact-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="full_name"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="Email"
                        placeholder="Email address"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <select className="custom-select" required>
                        <option value="">Select course</option>
                        <option value="UI/UX Designing">UI/UX Designing</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;
