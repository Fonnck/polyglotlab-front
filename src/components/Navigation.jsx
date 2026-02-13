import { Link } from "react-router-dom";
import { scrollWithOffset } from "../hooks/utils";
import { useScrollStore } from "../hooks/useScrollSrore";

function Navigation() {

  const { sectionRef } = useScrollStore()

  return (
    <ul className="navigation">
      <li className="current dropdown">
        <Link to="/">Inicio</Link>
        {/* <ul>
          <li>
            <Link to="/">Home page 01</Link>
          </li>
          <li>
            <Link to="/home-two">Home page 02</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Single</Link>
            <ul>
              <li>
                <Link to="/home-one-single">Home Single 1</Link>
              </li>
              <li>
                <Link to="/home-two-single">Home Single 2</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">Boxed</Link>
            <ul>
              <li>
                <Link to="/home-one-boxed">Home Boxed 1</Link>
              </li>
              <li>
                <Link to="/home-two-boxed">Home Boxed 2</Link>
              </li>
            </ul>
          </li>
        </ul> */}
      </li>
      <li className="dropdown">
        <Link to="#">Cursos</Link>
        {/* <ul>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Team</Link>
            <ul>
              <li>
                <Link to="/team">Team List</Link>
              </li>
              <li>
                <Link to="/team-details">Team Details</Link>
              </li>
            </ul>
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
        </ul> */}
      </li>
      <li className="dropdown">
        <Link to="#">Contacto</Link>
        {/* <ul>
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
        </ul> */}
      </li>
      <li className="dropdown">
        <Link to="#">Términos y Condiciones</Link>
        {/* <ul>
          <li>
            <Link to="/news">News Grid</Link>
          </li>
          <li>
            <Link to="/news-details">News Details</Link>
          </li>
        </ul> */}
      </li>
    </ul>
  );
}

export default Navigation;
