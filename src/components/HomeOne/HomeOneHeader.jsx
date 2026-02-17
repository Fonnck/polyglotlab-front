/* eslint-disable react/prop-types */
// Header.js
import { useState, useEffect } from 'react';
import MainLogoBlack from '../../assets/images/logo.png';
import MainLogoWhite from '../../assets/images/logo.png';
import Stickylogo from '../../assets/images/logo.png';
import Mobilelogo from '../../assets/images/logo-2.png';
import StickyHeader from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';
import { Link } from 'react-router-dom';
import { useSignUp } from '../../hooks/useSignUp.js';

function Header({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const { signOut } = useSignUp()

    useEffect(() => {
        StickyHeader();

        const observer = new MutationObserver(() => {
            setDarkMode(document.body.classList.contains('dark-mode'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', isMobileMenuOpen);
        return () => document.body.classList.remove('mobile-menu-visible');
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const toggleSearchPopup = () => {
        setSearchPopupOpen(prev => !prev);
        document.body.classList.toggle('mobile-search-active', !isSearchPopupOpen);
    };

    const closeSearchPopup = () => {
        setSearchPopupOpen(false);
        document.body.classList.remove('mobile-search-active');
    };

    return (
        <header className={`main-header header-style-one ${className}`}>
            <div className="main-box">
                <div className="logo-box">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? MainLogoWhite : MainLogoBlack} alt="Logo" />
                        </Link>
                    </div>
                </div>

                <div className="nav-outer">
                    <nav className="nav main-menu">
                        <Navigation />
                    </nav>
                    <div className="outer-box">
                        <Link href="tel:+92(8800)9806" className="info-btn">
                            <i className="icon fa fa-phone"></i>
                            <small>Call Anytime</small><br /> +92 (8800) - 8960
                        </Link>
                        <div className="ui-btn-outer">
                            <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                                <span className="icon lnr lnr-icon-search"></span>
                            </button>
                            <Link href="/cart" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
                        </div>
                        <div className="theme-btn btn-style-one pointer" onClick={() => signOut()}>
                            <span className="btn-title">Cerrar Sesión</span>
                        </div>
                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu}></div>
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={Mobilelogo} alt="Mobile Logo" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times"></i>
                        </div>
                    </div>
                    <MobileMenu />
                    <ul className="contact-list-one">
                        <li>
                            {/*<!-- Contact Info Box -->*/}
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset"></i>
                                <span className="title">Call Now</span>
                                <a href="tel:+92880098670">+92 (8800) - 98670</a>
                            </div>
                        </li>
                        <li>
                            {/*<!-- Contact Info Box -->*/}
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1"></span>
                                <span className="title">Send Email</span>
                                <a href="mailto:help@company.com">help@company.com</a>
                            </div>
                        </li>
                        <li>
                            {/*<!-- Contact Info Box -->*/}
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock"></span>
                                <span className="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </nav>
            </div>

            <div className={`search-popup ${isSearchPopupOpen ? 'open' : ''}`}>
                <span className="search-back-drop" onClick={closeSearchPopup}></span>
                <button className="close-search" onClick={closeSearchPopup}>
                    <span className="fa fa-times"></span>
                </button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/"><img src={Stickylogo} alt="Sticky Logo" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <Navigation />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;