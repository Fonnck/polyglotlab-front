/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import PageTitleBackground from '/src/assets/images/background/home.jpg';


function HeroPageTitle({ className, title, breadcrumb = [] }) {
    return (
        <>
            <section className={`page-title ${className || ''}`} style={{ backgroundImage: `url(${PageTitleBackground})` }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">{title}</h1>
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((value, index) => (
                                <li key={index} className="breadcrumb-item">
                                    <Link to={value.link}>{value.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HeroPageTitle;

