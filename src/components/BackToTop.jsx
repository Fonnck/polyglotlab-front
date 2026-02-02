import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom.js';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.scroll-to-top');
    }, []); // Added empty dependency array for proper effect cleanup

    return (
        <>
            <div className={`scroll-to-top ${className || ''}`}>
                <Link to="#">
                    <i className="fa fa-angle-up" style={{ color: '#fff' }} />
                </Link>
            </div>
        </>
    );
}

export default BackToTop;
