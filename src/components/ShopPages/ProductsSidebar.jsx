import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import RangeSlider from '../../lib/RangeSlider.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import PortfolioFilter2 from './PortfolioFilter2.jsx';
import ProductDetailsImg1 from '../../assets/images/resource/products/thumb-1.jpg';
import ProductDetailsImg2 from '../../assets/images/resource/products/thumb-2.jpg';
import ProductDetailsImg3 from '../../assets/images/resource/products/thumb-3.jpg';

function Products() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/products-sidebar', title: 'Products Sidebar' },
                ]}
            />
            <section className="featured-products">
                <span className="bg-shape"></span>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3">
                            <div className="shop-sidebar">
                                {/* Sidebar Search */}
                                <div className="sidebar-search">
                                    <form action="shop-products" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search..." required />
                                            <button><i className="lnr lnr-icon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                
                                {/* Category Widget */}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Categories</h5>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link to="/products-details">Cloud Solution</Link></li>
                                            <li><Link to="/products-details">Cyber Data</Link></li>
                                            <li><Link to="/products-details">SEO Marketing</Link></li>
                                            <li><Link to="/products-details">UI/UX Design</Link></li>
                                            <li><Link to="/products-details">Web Development</Link></li>
                                            <li><Link to="/products-details">Artificial Intelligence</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Price Filters */}
                                <div className="sidebar-widget price-filters">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Filter by Price</h5>
                                    </div>
                                    <RangeSlider/>
                                </div>
                                
                                {/* Popular Products Widget */}
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Popular Products</h5>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg1} alt="Product 1" /></Link></figure>
                                            <Link to="/products-details">Jilted Juror</Link>
                                            <span className="price">$45.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg2} alt="Product 2" /></Link></figure>
                                            <Link to="/products-details">Giant Jackal</Link>
                                            <span className="price">$34.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/products-details"><img src={ProductDetailsImg3} alt="Product 3" /></Link></figure>
                                            <Link to="/products-details">Spanish Baker</Link>
                                            <span className="price">$29.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="col-lg-9 content-side">
                            <div className="mixitup-gallery">
                                <PortfolioFilter2 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Products;
