/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useSignUp } from "../../../hooks/useSignUp";
import { useState } from "react";
import { useScrollStore } from "../../../hooks/useScrollSrore";
import Boy from "../../../assets/images/boy.png";
import Girl from "../../../assets/images/girl.png";
import Usa from "../../../assets/images/usa.png";
import France from "../../../assets/images/france.png";
import toast from "react-hot-toast";
import { scrollWithOffset } from "../../../hooks/utils";


export const FormSignUp = () => {

    const { sectionRef, setWannaLogIn } = useScrollStore();

    const { itsboy, setItsboy, english, setEnglish, validate, signUp } =
        useSignUp();

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
            verified: false
        },
        onSubmit: async (values) => {
            console.log(values);
            console.log('verified', values.verified);
            signUp({
                ...values,
                gender: itsboy ? "boy" : "girl",
                language: english ? "english" : "french",
            });
        },
        validate,
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
                        <h4 className="title">Inscríbete ahora!</h4>
                    </div>
                    {/* Contact Form */}
                    <form
                        id="contact-form"
                        className="d-flex flex-column gap-1"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <div className="d-flex gap-5">
                            <span>Selecciona el género :</span>
                            <span>Selecciona el idioma :</span>
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
                                        title="Niño-Boy-Gárcon"
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
                        <small className="mt-1">Información del acudiente</small>

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

                        <div className="d-flex gap-2 mt-2">
                            <div className="checkbox-wrapper-19">
                                <input
                                    type="checkbox"
                                    name="verified"
                                    id="cbtest-19"
                                    value={values.verified}
                                    onChange={handleChange} />
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
                                Enviar inscripción a {english ? "Inglés!" : "Francés!"}
                            </button>
                        </div>
                        <div className="d-flex mt-5 justify-content-between">
                            <small>
                                <small>
                                    | Diseñado por
                                    <a
                                        className="text-muted"
                                        target="_blank"
                                        href="https://www.codexdiamonds.com"
                                    >
                                        &nbsp;CodexDiamonds✨
                                    </a>
                                </small>
                            </small>
                            <small
                                className="pointer"
                                onClick={() => {
                                    setWannaLogIn(true);
                                }}
                            >
                                Ingresar
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
