/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { scrollWithOffset } from "../../hooks/utils";
import { useScrollStore } from "../../hooks/useScrollSrore";
/* import BackgroundImage from '../../assets/images/background/6.jpg'; */
const BackgroundImage =
  "https://img.freepik.com/free-photo/schoolchildren-reading-library_1098-4048.jpg?t=st=1770392960~exp=1770396560~hmac=1bdaa9f525889c9a6464292d7dd00bb9f796ac768edcabed407dec65e1dcb09f&w=2000";

function VideoSection({ className }) {
  const [isOpen, setOpen] = useState(false);
  const { sectionRef } = useScrollStore();

  return (
    <>
      <section className={`video-section ${className || ""}`}>
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="title-box">
              <h2 className="title">
                Una nueva Aventura <br className="d-none d-xl-block" /> espera
                por ti.
              </h2>
              <div
                onClick={() => scrollWithOffset(sectionRef.current, 11)}
                className="theme-btn btn-style-one bg-theme-color6"
              >
                Inscribirse
              </div>
            </div>
            <div className="video-box wow fadeInUp">
              <span className="float-icon icon-arrow-2"></span>
              <a
                onClick={() => setOpen(true)}
                className="play-btn lightbox-image"
              >
                <i className="icon fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="nOnWXUK5Cbk"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default VideoSection;
