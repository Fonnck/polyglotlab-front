import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your client images
import Client1 from '../../assets/images/resource/client.png';
import Client2 from '../../assets/images/resource/client.png';
import Client3 from '../../assets/images/resource/client.png';
import Client4 from '../../assets/images/resource/client.png';
import Client5 from '../../assets/images/resource/client.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};

function ClientHomeOne({ className }) {
    return (
        <section className={`clients-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sponsors-outer">
                    <Swiper {...swiperOptions} className="clients-carousel">
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client1} alt="Client 1" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client2} alt="Client 2" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client3} alt="Client 3" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client4} alt="Client 4" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client5} alt="Client 5" /></Link>
                        </SwiperSlide>
                        {/* Duplicate slides for demonstration */}
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client1} alt="Client 1" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client2} alt="Client 2" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client3} alt="Client 3" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client4} alt="Client 4" /></Link>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <Link to="#"><img src={Client5} alt="Client 5" /></Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ClientHomeOne;
