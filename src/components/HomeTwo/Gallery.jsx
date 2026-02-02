import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from 'react-modal';

// Import your images
import Image1 from '../../assets/images/resource/gallery-1.jpg';
import Image2 from '../../assets/images/resource/gallery-2.jpg';
import Image3 from '../../assets/images/resource/gallery-3.jpg';
import Image4 from '../../assets/images/resource/gallery-4.jpg';

const images = [Image1, Image2, Image3, Image4];

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '35vw',
        maxHeight: '90vh',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1000,
        padding: '0', // No padding for better image display
    },
};

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    },
};

function GallerySection() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentIndex(0);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        document.body.style.overflow = modalIsOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalIsOpen]);

    return (
        <section className="gallery-section">
            <div className="anim-icons">
                <span className="icon icon-line-1 spin-one"></span>
                <span className="icon icon-dots-7 bounce-x"></span>
            </div>
            <div className="auto-container">
                <Swiper {...swiperOptions} className="gallery-carousel">
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="gallery-item">
                            <a onClick={() => openModal(index)} className="lightbox-image">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </a>
                        </SwiperSlide>
                    ))}
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="gallery-item">
                            <a onClick={() => openModal(index)} className="lightbox-image">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Lightbox Modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={closeModal} className="modal-close-button" >Close</button>
                <div className="modal-content">
                    <button onClick={prevImage} className="modal-nav-button prev">Previous</button>
                    {images[currentIndex] && (
                        <img 
                            src={images[currentIndex]} 
                            alt={`Enlarged Gallery ${currentIndex + 1}`} 
                            className="modal-image"
                        />
                    )}
                    <button onClick={nextImage} className="modal-nav-button next">Next</button>
                </div>
            </Modal>
        </section>
    );
}

export default GallerySection;
