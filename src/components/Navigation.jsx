import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="navigation">
            <li className="current dropdown">
                <Link to="/">Home</Link>
                <ul>
                    <li><Link to="/">Home page 01</Link></li>
                    <li><Link to="/home-two">Home page 02</Link></li>
                    <li className="dropdown">
                        <Link to="#">Single</Link>
                        <ul>
                            <li><Link to="/home-one-single">Home Single 1</Link></li>
                            <li><Link to="/home-two-single">Home Single 2</Link></li>
                        </ul>
                    </li>
                   
                    <li className="dropdown">
                        <Link to="#">Boxed</Link>
                        <ul>
                            <li><Link to="/home-one-boxed">Home Boxed 1</Link></li>
                            <li><Link to="/home-two-boxed">Home Boxed 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul>
                    <li><Link to="/about-us">About</Link></li>
                    <li className="dropdown">
                        <Link to="#">Team</Link>
                        <ul>
                            <li><Link to="/team">Team List</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/error">Page 404</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link to="#">Courses</Link>
                <ul>
                    <li><Link to="/course">Courses List</Link></li>
                    <li><Link to="/course-details">Course Details</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link to="#">Shop</Link>
                <ul>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/products-sidebar">Products with Sidebar</Link></li>
                    <li><Link to="/products-details">Product Details</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link to="#">News</Link>
                <ul>
                    <li><Link to="/news">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}

export default Navigation;
