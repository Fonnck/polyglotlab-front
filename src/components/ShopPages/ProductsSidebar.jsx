/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import HomeOneHeader from "../HomeOne/HomeOneHeader.jsx";
import FooterHomeOne from "../HomeOne/FooterHomeOne.jsx";
import HeroPageTitle from "../HeroPageTitle.jsx";
import PortfolioFilter2 from "./PortfolioFilter2.jsx";
import ProductDetailsImg1 from "../../assets/images/resource/products/thumb-1.jpg";
import ProductDetailsImg2 from "../../assets/images/resource/products/thumb-2.jpg";
import ProductDetailsImg3 from "../../assets/images/resource/products/thumb-3.jpg";
import { useSignInStore, useSignUp } from "../../hooks/useSignUp.js";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client.js";
import { FaSignOutAlt } from "react-icons/fa";
import { useDashboardStore } from "../../hooks/useDashboard.js";
import { obtenerIP } from "../../hooks/utils/index.js";

const admin_menu = [
  {
    name: "Nuevas Solicitudes",
    action: () => {},
  },
  {
    name: "Solicitudes Pendientes",
    action: () => {},
  },
  {
    name: "Solicitudes Completadas",
    action: () => {},
  },
  {
    name: "Pagos",
    action: () => {},
  },
];
const customer_menu = [
  {
    name: "Nuevas solicitudes",
    action: () => {},
  },
  {
    name: "Mi Suscripción",
    action: () => {},
  },
];

function Products() {
  const { signOut } = useSignUp();
  const { user, setUser } = useSignInStore();
  const { setSelected } = useDashboardStore();
  const { getUserByEmail } = useSignUp();
  const nav = useNavigate();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      if (session) {
        if (user === undefined) {
          getUserByEmail(session.user.email);
          setSelected("Nuevas Solicitudes");
        }
        if (event !== "SIGNED_IN") {
          if (!session) {
            nav("/");
          } else {
            nav("/products-sidebar");
            obtenerIP().then((ip) => {
              localStorage.setItem("public_ip", ip);
            });
          }
        }
      } else {
        console.log(session);
        nav("/confirmed");
      }
    });
  }, []);

  return (
    <>
      <HomeOneHeader />
      <HeroPageTitle
        title="Bienvenido"
        breadcrumb={[
          { link: "/", title: "Home" },
          { link: "/products-sidebar", title: "Products Sidebar" },
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
                  <form
                    action="shop-products"
                    method="post"
                    className="search-form"
                  >
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Buscar..."
                        required
                      />
                      <button disabled onClick={() => {}}>
                        <i className="lnr lnr-icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Category Widget */}
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h5
                      className="widget-title pointer"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Matrículas
                    </h5>
                  </div>
                  <div className="widget-content">
                    {user?.role === "admin" && (
                      <ul className="category-list clearfix">
                        {admin_menu.map((e, i) => (
                          <li
                            className="menu_item"
                            key={i}
                            onClick={() => {
                              setSelected(e.name);
                            }}
                          >
                            <a>{e.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {user?.role === "customer" && (
                      <ul className="category-list clearfix">
                        {customer_menu.map((e, i) => (
                          <li
                            className="menu_item"
                            key={i}
                            onClick={() => {
                              setSelected(e.name);
                              setContract(null);
                            }}
                          >
                            <a>{e.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div
                    className="mt-5 signout pointer"
                    onClick={() => signOut()}
                  >
                    <small>
                      <FaSignOutAlt />
                      &nbsp;
                      <span>Cerrar Sessión</span>
                    </small>
                  </div>
                </div>

                {/* Price Filters */}
                {/* <div className="sidebar-widget price-filters">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Filter by Price</h5>
                                    </div>
                                    <RangeSlider />
                                </div> */}

                {/* Popular Products Widget */}
                {user?.role === "customer" && (
                  <div className="sidebar-widget post-widget">
                    <div className="widget-title">
                      <h5 className="widget-title">Documentos Requeridos</h5>
                    </div>
                    <div className="post-inner">
                      <div className="post">
                        <figure className="post-thumb">
                          <Link to="/products-details">
                            <img src={ProductDetailsImg1} alt="Product 1" />
                          </Link>
                        </figure>
                        <Link to="/products-details">Tarjeta de Identidad</Link>
                        <span className="price">Pendiente</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link to="/products-details">
                            <img src={ProductDetailsImg2} alt="Product 2" />
                          </Link>
                        </figure>
                        <Link to="/products-details">
                          Cédula Ciudadania (Copia)
                        </Link>
                        <span className="price">Pendiente</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb">
                          <Link to="/products-details">
                            <img src={ProductDetailsImg3} alt="Product 3" />
                          </Link>
                        </figure>
                        <Link to="/products-details">
                          Registro Civil (Copia)
                        </Link>
                        <span className="price">Pendiente</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9 content-side">
              <div className="mixitup-gallery">
                <PortfolioFilter2
                  user={user}
                  contract={contract}
                  setContract={setContract}
                />
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
