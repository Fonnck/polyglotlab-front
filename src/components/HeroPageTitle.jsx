/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSignInStore, useSignUp } from '../hooks/useSignUp';
import { supabase } from '../supabase/client';
import PageTitleBackground from '/src/assets/images/background/home.jpg';


function HeroPageTitle({ className, title, breadcrumb = [] }) {

    const { user } = useSignInStore();
    const { signOut } = useSignUp();
    console.log(user);

    useEffect(() => {
        if (user === undefined) {
            // getUser() from localStorage
        }
        // Usar Local Storage
    }, [user]);

    return (
        <>
            <section className={`page-title ${className || ''}`} style={{ backgroundImage: `url(${PageTitleBackground})` }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title" style={{ margin: 0 }}>{title}</h1>
                        <h2 style={{ color: '#ffae1e' }}>{user?.first_name + " " + user?.last_name}</h2>
                        {/* <ul className="page-breadcrumb">
                            {breadcrumb.map((value, index) => (
                                <li key={index} className="breadcrumb-item">
                                    <Link to={value.link}>{value.title}</Link>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </section>
        </>
    );
}
export default HeroPageTitle;

