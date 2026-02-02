import React from 'react';

function SingleMenu() {
    return (
        <ul className="navigation onepage-nav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#teachers">Teachers</a></li>
            <li><a href="#news">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    );
}

export default SingleMenu;
