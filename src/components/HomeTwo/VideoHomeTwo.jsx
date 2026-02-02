import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import BackgroundImage from '../../assets/images/background/6.jpg';

function VideoSection({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`video-section ${className || ''}`}>
                <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                ></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <h2 className="title">
                                Take a video tour to learn <br className="d-none d-xl-block" /> intro of campus
                            </h2>
                            <Link to="/about-us"
                                className="theme-btn btn-style-one bg-theme-color3"
                            >
                                Discover more
                            </Link>
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
                videoId="Fvae8nxzVz4"
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default VideoSection;
