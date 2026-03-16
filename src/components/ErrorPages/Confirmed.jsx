/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import NotFoundImage from "../../assets/images/resource/404.jpg";
import { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle.js";
import TestimonialSection from "../HomeOne/TestimonialHomeOne.jsx";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader.jsx";
import Loader from "../Helper/Loader.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import ConfirmedAction from "../HomeOne/ConfirmedAction.jsx";

function Confirmed({ className }) {
  const [drawer, drawerAction] = useToggle(false);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  return (
    <>
      <ReactConfetti
        width={width}
        height={2200}
        numberOfPieces={500}
        style={{ zIndex: "10" }}
      />
      {loading && (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <HomeTwoHeader action={drawerAction.toggle} />
      <ConfirmedAction />
      <TestimonialSection />
      <FooterHomeOne />
    </>
  );
}

export default Confirmed;
