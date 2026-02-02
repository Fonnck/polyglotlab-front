import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../assets/images/background/2.jpg';

function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-02-02T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
            setTimeLeft(time);
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
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="countdown-section">
            <div className="bg-image zoom-two" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Book your seat now</span>
                        <h2>Upcoming study trip</h2>
                    </div>
                    <div className="time-counter wow fadeInUp">
                        <div className="time-countdown">
                            <div className="time-box">
                                <span>{timeLeft.days}</span> <small>Days</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.hours}</span> <small>Hours</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.minutes}</span> <small>Minutes</small>
                            </div>
                            <div className="time-box">
                                <span>{timeLeft.seconds}</span> <small>Seconds</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CountdownSection;
