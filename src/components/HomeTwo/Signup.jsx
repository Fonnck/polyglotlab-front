/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useScrollStore } from "../../hooks/useScrollSrore";
import { FormSignUp } from "./components/FormSignUp";
import { FormLogIn } from "./components/FormLogIn";

function SignupSectionTwo() {

  const { sectionRef, wannaLogIn, setWannaLogIn } = useScrollStore();
  const [verified, setVerified] = useState(false)

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
            </div>
          </div>

          {/* Login Form */}
          {wannaLogIn && (
            <FormLogIn />
          )}
          {/* Form Column */}
          {!wannaLogIn && (
            <FormSignUp />
          )}
        </div>
      </div>
    </section>
  );
}

export default SignupSectionTwo;
