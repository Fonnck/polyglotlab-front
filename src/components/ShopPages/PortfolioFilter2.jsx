/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';
import ProductImage1 from '../../assets/images/resource/products/1.jpg';
import Boy from "../../assets/images/boy.png";
import Girl from "../../assets/images/girl.png";
import { useDashboardStore } from '../../hooks/useDashboard';
import toast from 'react-hot-toast';
import { supabase } from '../../supabase/client';

export default function PortfolioFilter2() {

	const { selected } = useDashboardStore();
	const [requests, setRequests] = useState();


	useEffect(() => {
		getNewRequests();
	}, []);

	const getNewRequests = async () => {
		try {
			const { data, error } = await supabase
				.from("students")
				.select('*')
				.eq("status", 'inactive')
				.select();
			console.log(error);
			if (error === null) {
				console.log(data);
				setRequests(data);
			}
			else {
				throw 'No hay nuevas solicitudes'
			}
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
					<div key={i} className="product-block masonry-item small-column all cat-2 product lenses col-lg-4 col-md-6 col-sm-12">
						<div className="inner-box">
							<div className="image-box">
								<div className="image"><Link to="/products-details">
									<img src={e.gender === 'boy' ? Boy : Girl} alt="Product 1" /></Link>
								</div>
								<div className="icon-box">
									<Link to="/products-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
									<Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
								</div>
							</div>
							<div className="content">
								<h4><Link to="/products-details">{`${e.first_name} ${e.last_name}`}</Link></h4>
								<span className="price">{e.language}</span>
							</div>
						</div>
					</div>
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



