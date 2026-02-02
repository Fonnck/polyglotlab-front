import React from 'react';
import { Link } from 'react-router-dom';
function MapSection({ className }) {
    return (
        <section className={`map-section ${className || ''}`}>
            <div class="container-fluid p-0">
			<div class="row">
            <iframe
                className="map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map"
                style={{ border: 0 }}
                allowFullScreen
            ></iframe>
            </div>
            </div>
        </section>
    );
}

export default MapSection;