/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useScrollStore } from "../../../hooks/useScrollSrore";
import { useFormik } from "formik";
import { useSignUp } from "../../../hooks/useSignUp";
import LoginLogo from "../../../assets/images/logo-1.png";
import toast from "react-hot-toast";
import { scrollWithOffset } from "../../../hooks/utils";

export const FormLogIn = () => {

    const { sectionRef, wannaLogIn, setWannaLogIn } = useScrollStore();

    const { validateLogIn, logIn } = useSignUp();

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: "",
            identification: "",
            verifiedd: false
        },
        onSubmit: async (values) => {
            console.log(values);
            console.log('verified', values.verified);
            console.log(errors);
            logIn({ ...values, password: '2d6ef242fM..-' })
            /* signUp({
              ...values,
              gender: itsboy ? "boy" : "girl",
              language: english ? "english" : "french",
            }); */
        },
        validate: validateLogIn,
    });

    return (
        <div
            className="form-column col-xl-6 col-lg-5 col-md-12 col-sm-12"
            ref={sectionRef}
        >
            <div className="inner-column">
                {/* Sign Form */}
                <div className="signup-form-two wow fadeInLeft">
                    <div className="title-box">
                        <h4 className="title">
                            {wannaLogIn ? "Inicio de sesión" : "Inscríbete ahora!"}
                        </h4>
                    </div>
                    {/* Contact Form */}
                    <div className="d-flex mt-4">
                        <img
                            style={{ width: "60%", margin: "0 auto" }}
                            src={LoginLogo}
                        />
                    </div>
                    <form
                        id="login-form"
                        className="d-flex flex-column gap-1"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group mt-2">
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
                                type="password"
                                name="identification"
                                placeholder="Contraseña *"
                                required
                                value={values.identification}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-flex gap-2 mt-2">
                            <div className="checkbox-wrapper-19">
                                <input
                                    type="checkbox"
                                    name="verified"
                                    value={values.verified}
                                    id="cbtest-19"
                                    onChange={handleChange}
                                />
                                <label htmlFor="cbtest-19" className="check-box" />
                            </div>

                            <small>Acepto términos y condiciones</small>
                        </div>

                        <div className="mt-4">
                            <button
                                className="button-74"
                                type="submit"
                                name="submit-form"
                                onClick={() => {
                                    toast.error(
                                        Object.entries(errors)[0][1] &&
                                        Object.entries(errors)[0][1],
                                    );
                                }}
                            >
                                Ingresar a{" "}
                                <span style={{ color: "#002f49" }}>Polyglot</span>
                                <span style={{ color: "#ffae1e" }}>Lab</span>
                            </button>
                        </div>
                        <div className="d-flex mt-5 justify-content-between">
                            <small>
                                <small>
                                    | Diseñado por
                                    <a
                                        className="text-muted"
                                        target="_blank"
                                        href="codexdiamonds.com"
                                    >
                                        &nbsp;CodexDiamonds✨
                                    </a>
                                </small>
                            </small>
                            <small
                                className="pointer"
                                onClick={() => {
                                    setWannaLogIn(false);
                                }}
                            >
                                Registrarse
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
