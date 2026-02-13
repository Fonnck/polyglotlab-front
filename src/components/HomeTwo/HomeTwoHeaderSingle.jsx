/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Stickylogo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/logo-2.png";
import StickyHeader from "../../lib/StickyMenu.js";
import Navigation from "../Navigation.jsx";
import MobileMenu from "../MobileMenu.jsx";
import SingleMenu1 from "../SingleMenu1.jsx";
import { useScrollStore } from "../../hooks/useScrollSrore.js";
import { scrollWithOffset } from "../../hooks/utils/index.js";
import { useSignInStore } from "../../hooks/useSignUp.js";
import toast from "react-hot-toast";

function Header({ className = "", scroll = false }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const { sectionRef } = useScrollStore()
  const { setWannaLogIn } = useSignInStore()

  useEffect(() => {
    StickyHeader();

    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", isMobileMenuOpen);
    return () => document.body.classList.remove("mobile-menu-visible");
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleSearchPopup = () => {
    setSearchPopupOpen((prev) => !prev);
    document.body.classList.toggle("mobile-search-active", !isSearchPopupOpen);
  };

  const closeSearchPopup = () => {
    setSearchPopupOpen(false);
    document.body.classList.remove("mobile-search-active");
  };

  const onRegister = () => {
    toast.success('touched')
    setWannaLogIn(true);
    scrollWithOffset(sectionRef, 10);
  }

  return (
    <>
      <header className={`main-header header-style-two ${className || ""}`}>
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left">
                <div className="text">
                  First 20 students get 50% discount. Hurry up!
                </div>
              </div>
              <div className="top-right">
                <ul className="useful-links">
                  <li>
                    <Link to="#">Login</Link>
                  </li>
                  <li onClick={() => onRegister()}>
                    <Link to={'/#sregister'}>Register</Link>
                  </li>
                </ul>
                <ul className="social-icon-one light">
                  <li>
                    <Link to="#">
                      <span className="fab fa-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-facebook-square"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-pinterest-p"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <ul className="contact-info-outer">
                <li>
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset"></i>
                    <span className="title">Call Anytime</span>
                    <Link to="tel:+92880098670" className="text">
                      + 98 (000) - 9630
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-envelope1"></i>
                    <span className="title">Send Email</span>
                    <Link to="mailto:ambed@company.com" className="text">
                      ambed@company.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-map-marker"></i>
                    <span className="title">380 ST Kilda Road</span>
                    <div className="text">Melbourne, Australia</div>
                  </div>
                </li>
              </ul>
              {/* Mobile Nav toggler */}
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="main-box">
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <SingleMenu1 />
                </nav>
                <div className="outer-box">
                  <button
                    className="ui-btn ui-btn search-btn"
                    onClick={toggleSearchPopup}
                  >
                    <span className="icon lnr lnr-icon-search"></span>
                  </button>
                  <Link to="/cart" className="ui-btn">
                    <i className="lnr-icon-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="menu-backdrop" onClick={closeMobileMenu}></div>
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link to="/">
                  <img src={MobileLogo} alt="Mobile Logo" />
                </Link>
              </div>
              <div className="close-btn" onClick={closeMobileMenu}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>
            <ul className="navigation clearfix">
              <SingleMenu1 />
            </ul>
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
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Header Search */}
        <div className={`search-popup ${isSearchPopupOpen ? "open" : ""}`}>
          <span className="search-back-drop" onClick={closeSearchPopup}></span>
          <button className="close-search" onClick={closeSearchPopup}>
            <span className="fa fa-times"></span>
          </button>
          <div className="search-inner">
            <form method="post" action="/">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Sticky Header */}
        <div
          className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link to="/">
                  <img src={Stickylogo} alt="Sticky Logo" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">{/*  <SingleMenu1 /> */}</nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
