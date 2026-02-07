import { useState, useEffect, useRef } from "react";
import { useScrollStore } from "../../hooks/useScrollSrore";

function SignupSectionTwo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sectionRef = useRef(null);
  const setSectionRef = useScrollStore((state) => state.setSectionRef);

  useEffect(() => {
    setSectionRef(sectionRef);
  }, [setSectionRef]);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-02T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="signup-section-two">
      <div className="auto-container">
        <div className="anim-icons">
          <span className="icon icon-line-1 spin-one"></span>
          <span className="icon icon-line-2 spin-one"></span>
          <span className="icon icon-line-3 bounce-x"></span>
          <span className="icon icon-square spin-one"></span>
          <span className="icon icon-triangle spin-one"></span>
          <span className="icon icon-dots-2 bounce-y"></span>
          <span className="icon icon-dots-6 spin-one"></span>
        </div>

        <div className="row">
          {/* Title Column */}
          <div className="title-column col-xl-6 col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2>Register now get premium online courses for free!</h2>
                <div className="text">
                  Lorem ipsum gravida nibh vel velit auctor aliquetnean
                  sollicitudin, lorem quis bibendum auci elit consequat is
                  simply free text available in the psutis sem nibh id eis sed
                  odio sit amet.
                </div>
              </div>
              <div className="time-countdown time-counter-two">
                <div className="time-box time-box-days">
                  <span>{timeLeft.days}</span> <small>Days</small>
                </div>
                <div className="time-box time-box-hours">
                  <span>{timeLeft.hours}</span> <small>Hours</small>
                </div>
                <div className="time-box time-box-minutes">
                  <span>{timeLeft.minutes}</span> <small>Minutes</small>
                </div>
                <div className="time-box time-box-seconds">
                  <span>{timeLeft.seconds}</span> <small>Seconds</small>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div
            className="form-column col-xl-6 col-lg-5 col-md-12 col-sm-12"
            ref={sectionRef}
          >
            <div className="inner-column">
              {/* Sign Form */}
              <div className="signup-form-two wow fadeInLeft">
                <div className="title-box">
                  <h4 className="title">Inscríbete ahora!</h4>
                </div>

                {/* Contact Form */}
                <form
                  method=""
                  action=""
                  id="contact-form"
                  className="d-flex flex-column gap-2"
                >
                  <div className="d-flex gap-2">
                    <div className="form-group w-50">
                      <input
                        className="solid_input"
                        type="text"
                        name="full_name"
                        placeholder="Nombre *"
                        required
                      />
                    </div>
                    <div className="form-group w-50">
                      <input
                        className="solid_input"
                        type="text"
                        name="full_name"
                        placeholder="Apellido *"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="text"
                      name="Email"
                      placeholder="Correo electrónico *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="text"
                      name="Phone"
                      placeholder="Celular *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="text"
                      name="Subject"
                      placeholder="No. identificación *"
                      required
                    />
                  </div>
                  <div className="d-flex col-12 gap-4">
                    <div className="d-flex gap-2 w-50">
                      <div className="form-group w-50">
                        <input
                          className="solid_input"
                          type="button"
                          name="full_name"
                          placeholder="Boy - Garçon"
                          required
                        />
                      </div>
                      <div className="form-group w-50">
                        <input
                          className="solid_input"
                          type="button"
                          name="full_name"
                          placeholder="Apellido *"
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex gap-2 w-50">
                      <div className="form-group w-50">
                        <input
                          className="solid_input"
                          type="button"
                          name="full_name"
                          placeholder="Boy - Garçon"
                          required
                        />
                      </div>
                      <div className="form-group w-50">
                        <input
                          className="solid_input"
                          type="button"
                          name="full_name"
                          placeholder="Apellido *"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="text"
                      name="Subject"
                      placeholder="No. identificación *"
                      required
                    />
                  </div>
                  <div className="">
                    <button
                      className="button-74"
                      type="submit"
                      name="submit-form"
                    >
                      Obtener acceso
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSectionTwo;
