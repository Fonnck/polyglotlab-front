/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';
import ProductImage1 from '../../assets/images/resource/products/1.jpg';
import { useDashboardStore } from '../../hooks/useDashboard';
import toast from 'react-hot-toast';
import { supabase } from '../../supabase/client';
import { Rectangle } from './Rectangle';
import { useLoader } from '../../hooks/useLoader';

export default function PortfolioFilter2({ user }) {

	const { selected } = useDashboardStore();
	const [requests, setRequests] = useState();
	const { setLoading } = useLoader();

	useEffect(() => {
		if (user?.role === 'customer') {
			getParentRequests(user?.identification)
		} else {
			if (selected === 'Nuevas Solicitudes') {
				getRequests('inactive');
			} else if (selected === 'Solicitudes Pendientes') {
				getRequests('pending');
			} else {
				getRequests('active');
			}
		}
	}, [selected]);

	const getRequests = async (status) => {
		try {
			setLoading(true);
			await supabase
				.from("students")
				.select('*')
				.eq("status", status)
				.select()
				.then(({ data, error }) => {
					setLoading(false);
					if (error === null) {
						console.log(data);
						setRequests(data);
					} else {
						console.log(error);
						throw 'No hay nuevas solicitudes'
					}
				})
		} catch (error) {
			toast.error(error.message)
		}
	};

	const getParentRequests = async (parent_identification) => {
		try {
			setLoading(true);
			await supabase
				.from("students")
				.select('*')
				.in("status", ['inactive', 'pending'])
				.eq('parent_id', parent_identification)
				.then(({ data, error }) => {
					setLoading(false);
					if (error === null) {
						console.log(data);
						setRequests(data);
					} else {
						console.log(error);
						throw 'No hay nuevas solicitudes'
					}
				})
		} catch (error) {
			toast.error(error.message)
		}
	};

	/* useEffect(() => {
		if (isotopeInstance) {
			isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
		}
	}, [filterKey, isotopeInstance]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
	};

	const activeBtn = (value) => (value === filterKey ? "filter active" : "filter"); */

	return (
		<>
			<div className="filters clearfix">
				<h3>{selected}</h3>
				{/* <ul className="filter-tabs filter-btns clearfix">
					<li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
					<li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Book</li>
					<li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Digital</li>
					<li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Language</li>
					<li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Technology</li>
					<li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Studies</li>
				</ul> */}
			</div>
			<div className="items-container row">
				{/* Your product blocks here */}
				{requests?.map((e, i) => (
					<Rectangle key={i} e={e} i={i} getNewRequests={getRequests} />
				))}

				{/* <div className="product-block masonry-item small-column all cat-1 cat-2 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage2} alt="Product 2" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Case of Giant</Link></h4>
							<span className="price">$52.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-1 cat-2 cat-4 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage3} alt="Product 3" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Miniature Goose</Link></h4>
							<span className="price">$43.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-1 cat-3 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage4} alt="Product 4" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Thirteenth Tuba</Link></h4>
							<span className="price">$22.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-1 cat-3 cat-5 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage5} alt="Product 5" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Jilted Juror</Link></h4>
							<span className="price">$34.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-2 cat-3 cat-4 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage6} alt="Product 6" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Jilted Lodger</Link></h4>
							<span className="price">$52.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-1 cat-2 cat-5 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage7} alt="Product 7" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Spanish Baker</Link></h4>
							<span className="price">$25.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
								className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div>
				<div className="product-block masonry-item small-column all cat-1 cat-4 cat-5 product lenses col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<div className="image"><Link to="/products-details"><img src={ProductImage8} alt="Product 8" /></Link></div>
							<div className="icon-box">
								<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
								<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
							</div>
						</div>
						<div className="content">
							<h4><Link to="/products-details">Clue Thirteenth</Link></h4>
							<span className="price">$30.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>

						</div>
					</div>
				</div> */}
			</div>
		</>
	);
}



