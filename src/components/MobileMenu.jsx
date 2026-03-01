import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState({ status: false, key: "" });
  const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

  const handleClick = (key) => {
    setIsActive((prevState) =>
      prevState.key === key
        ? { status: false, key: "" }
        : { status: true, key },
    );
  };

  const handleSubClick = (key) => {
    setSubIsActive((prevState) =>
      prevState.key === key
        ? { status: false, key: "" }
        : { status: true, key },
    );
  };

  return (
    <ul className="navigation">
      {/* Home Section */}
      <li className="dropdown">
        <Link to="/">Inicio</Link>
        {/* <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                    <li><Link to="/">Home page 01</Link></li>
                    <li><Link to="/home-two">Home page 02</Link></li>
                    <li className="dropdown">
                        <Link to="#">Single</Link>
                        <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                            <li><Link to="/home-one-single">Home Single 1</Link></li>
                            <li><Link to="/home-two-single">Home Single 2</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(1)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Boxed</Link>
                        <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                            <li><Link to="/home-one-boxed">Home Boxed 1</Link></li>
                            <li><Link to="/home-two-boxed">Home Boxed 2</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(2)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Header Styles</Link>
                        <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                            <li><Link to="/">Header Style One</Link></li>
                            <li><Link to="/home-two">Header Style Two</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(3)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul> */}
        {/* <div
          className={
            isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={() => handleClick(1)}
        >
          <i className="fa fa-angle-down"></i>
        </div> */}
      </li>

      {/* Pages Section */}
      <li className="dropdown">
        <span
          className="pointer"
          style={{ color: "white", marginLeft: 20 }}
          to="#"
        >
          Cursos
        </span>
        {/* <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Team</Link>
            <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
              <li>
                <Link to="/team">Team List</Link>
              </li>
              <li>
                <Link to="/team-details">Team Details</Link>
              </li>
            </ul>
            <div
              className={
                isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"
              }
              onClick={() => handleSubClick(4)}
            >
              <i className="fa fa-angle-down"></i>
            </div>
          </li>
          <li>
            <Link to="/testimonial">Testimonial</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/error">Page 404</Link>
          </li>
        </ul>
        <div
          className={
            isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={() => handleClick(2)}
        >
          <i className="fa fa-angle-down"></i>
        </div> */}
      </li>

      {/* Courses Section */}
      <li className="dropdown">
        <Link
          className="pointer"
          style={{ color: "white" }}
          to="https://wa.link/ri3zlj"
          target="_blank"
        >
          Contacto
        </Link>
        {/* <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
          <li>
            <Link to="/course">Courses List</Link>
          </li>
          <li>
            <Link to="/course-details">Course Details</Link>
          </li>
        </ul>
        <div
          className={
            isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={() => handleClick(3)}
        >
          <i className="fa fa-angle-down"></i>
        </div> */}
      </li>

      {/* Shop Section */}
      <li className="dropdown">
        <span
          className="pointer"
          style={{ color: "white", marginLeft: 20 }}
          to="https://drive.google.com/file/d/1HfmF-3U5kPV6yqXN43F7GUE8bGlbOUBt/view?usp=sharing"
        >
          Términos y condiciones
        </span>
        {/* <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products-sidebar">Products with Sidebar</Link>
          </li>
          <li>
            <Link to="/products-details">Product Details</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <div
          className={
            isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"
          }
          onClick={() => handleClick(4)}
        >
          <i className="fa fa-angle-down"></i>
        </div> */}
      </li>

      {/* Contact Section */}
      {/* <li>
        <Link to="/contact">Contact</Link>
      </li> */}
    </ul>
  );
};

export default MobileMenu;
