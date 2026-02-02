import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import Products from './Products.jsx';

function ShopPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/products', title: 'Products' },
                ]}
            />
            <Products />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ShopPages;
