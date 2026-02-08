/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "../../hooks/useScrollSrore";
import Boy from "../../assets/images/boy.png";
import Girl from "../../assets/images/girl.png";
import Usa from "../../assets/images/usa.png";
import France from "../../assets/images/france.png";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupSectionTwo() {
  // const { itsboy, setItsBoy, english, setEnglish } = useSignInStore();
  const [itsboy, setItsboy] = useState(true);
  const [english, setEnglish] = useState("english");
  const nav = useNavigate();
  const sectionRef = useRef(null);
  const setSectionRef = useScrollStore((state) => state.setSectionRef);

  useEffect(() => {
    setSectionRef(sectionRef);
  }, [setSectionRef]);

  const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Necesitamos saber tu nombre";
    } else if (values.first_name.length < 2) {
      errors.first_name = "Tu nombre debe tener al menos 2 caracteres";
    }

    if (!values.last_name) {
      errors.last_name = "Necesitamos saber tu apellido";
    } else if (values.last_name.length < 2) {
      errors.last_name = "Tu apellido debe tener al menos 2 caracteres";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Correo electrónico inválido";
    }

    if (!values.phone) {
      errors.phone = "Necesitamos tu número de celular";
    } else if (values.phone.toString().length < 7) {
      errors.phone = "Número de celular demasiado corto";
    } else if (values.phone.toString().length > 15) {
      errors.phone = "Número de celular demasiado largo";
    }

    if (!values.identification) {
      errors.identification = "Necesitamos tu número de identificación";
    } else if (values.identification.length < 5) {
      errors.identification = "Número de identificación demasiado corto";
    } else if (values.identification.length > 20) {
      errors.identification = "Número de identificación demasiado largo";
    }

    if (!values.child_name) {
      errors.child_name =
        "Necesitamos saber el nombre de tu " + (itsboy ? "niño 👦🏻" : "niña 👧🏻");
    } else if (values.child_name.length < 2) {
      errors.child_name = `El nombre de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"} debe tener al menos 2 caracteres`;
    }
    if (!values.child_age) {
      errors.child_age = `Necesitamos saber la edad de tu ${itsboy ? "niño 👦🏻" : "niña 👧🏻"}`;
    }
    return errors;
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: 0,
      identification: "",
      child_name: "",
      child_age: 0,
      gender: itsboy ? "boy" : "girl",
      language: english ? "english" : "french",
    },
    onSubmit: (values) => {
      values && toast.success("¡Inscripción enviada con éxito!");
      nav("/thank-you");
    },
    validate,
  });

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
                <h2 style={{ fontSize: "70px" }}>
                  Un nuevo
                  <span style={{ color: "#ffae1e" }}>{" Idioma "}</span>
                  está a punto de convertirse en tu
                  <span style={{ color: "#ffae1e" }}>{" Superpoder."}</span>
                </h2>
                <div
                  className="text"
                  style={{ fontSize: "24px", maxWidth: "85%" }}
                >
                  Lorem ipsum gravida nibh vel velit auctor aliquetnean
                  sollicitudin, lorem quis bibendum auci elit consequat is
                  simply free text available in the psutis sem nibh id eis sed
                  odio sit amet.
                </div>
              </div>
              {/* <div className="time-countdown time-counter-two">
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
              </div> */}
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
                  id="contact-form"
                  className="d-flex flex-column gap-1"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <small>Información del acudiente</small>
                  <div className="d-flex gap-2">
                    <div className="form-group w-50">
                      <input
                        className="solid_input"
                        type="text"
                        name="first_name"
                        placeholder="Nombre *"
                        required
                        value={values.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group w-50">
                      <input
                        className="solid_input"
                        type="text"
                        name="last_name"
                        placeholder="Apellido *"
                        required
                        value={values.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="email"
                      name="email"
                      placeholder="Correo electrónico *"
                      required
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="number"
                      name="phone"
                      placeholder="Celular *"
                      required
                      value={values.phone === 0 ? "" : values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="solid_input"
                      type="text"
                      name="identification"
                      placeholder="No. identificación *"
                      required
                      value={values.identification}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex col-12 gap-3 mt-2">
                    <div className="d-flex gap-2 w-50">
                      <div className="form-group w-50">
                        <img
                          src={Boy}
                          className={
                            "_selector pointer " +
                            (itsboy ? " _active" : " _noactive")
                          }
                          onClick={() => setItsboy(true)}
                          type="button"
                          title="Niño - Boy - Gárcon"
                          alt="boy"
                        />
                      </div>
                      <div className="form-group w-50">
                        <img
                          src={Girl}
                          className={
                            "_selector pointer " +
                            (itsboy ? " _noactive" : " _active")
                          }
                          onClick={() => setItsboy(false)}
                          type="button"
                          title="Niña - Girl - Filla"
                          alt="girl"
                        />
                      </div>
                    </div>
                    <div className="d-flex gap-2 w-50">
                      <div className="form-group w-50">
                        <img
                          src={Usa}
                          className={
                            "_selector pointer " +
                            (english ? " _active" : " _noactive")
                          }
                          onClick={() => setEnglish(true)}
                          name="language"
                          type="button"
                          title="Inglés English Anglais"
                          alt="usa"
                        />
                      </div>
                      <div className="form-group w-50">
                        <img
                          src={France}
                          className={
                            "_selector pointer" +
                            (english ? " _noactive" : " _active")
                          }
                          onClick={() => setEnglish(false)}
                          type="button"
                          title="Francés French Français"
                          alt="france"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex col-12 gap-3">
                    <div className="form-group" style={{ width: "60%" }}>
                      <small>
                        {itsboy ? "Nombre del niño *" : "Nombre de la niña *"}
                      </small>
                      <input
                        className="solid_input"
                        type="text"
                        name="child_name"
                        required
                        value={values.child_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group" style={{ width: "40%" }}>
                      <small>Edad *</small>
                      <input
                        className="solid_input"
                        type="number"
                        name="child_age"
                        required
                        value={values.child_age === 0 ? "" : values.child_age}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      className="button-74"
                      type="submit"
                      name="submit-form"
                      onClick={() => {
                        errors && toast.error(Object.entries(errors)[0][1]);
                      }}
                    >
                      Enviar inscripción a {english ? "Inglés!" : "Francés!"}
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
