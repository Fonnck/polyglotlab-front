/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import HomeOneHeader from "../HomeOne/HomeOneHeader.jsx";
import FooterHomeOne from "../HomeTwo/FooterHomeOne.jsx";
import HeroPageTitle from "../HeroPageTitle.jsx";
import PortfolioFilter2 from "./PortfolioFilter2.jsx";
import ProductDetailsImg1 from "../../assets/images/resource/products/thumb-1.png";
import ProductDetailsImg2 from "../../assets/images/resource/products/thumb-1.png";
import ProductDetailsImg3 from "../../assets/images/resource/products/thumb-3.png";
import { useSignInStore, useSignUp } from "../../hooks/useSignUp.js";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client.js";
import { FaSignOutAlt } from "react-icons/fa";
import { useDashboardStore } from "../../hooks/useDashboard.js";
import { obtenerIP } from "../../hooks/utils/index.js";
import { FileUpload } from "./FileUpload.jsx";
import toast from "react-hot-toast";

const admin_menu = [
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
    name: "Mi Suscripción",
    action: () => {},
  },
  {
    name: "Agregar Estudiante",
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
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    (setModalTitle(e), setShow(true));
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      if (session) {
        nav("/products-sidebar");
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

  /* async function uploadFile(e) {
    let fileSelected = e.target.files[0];

    const { data, error } = supabase.storage
      .from("enrollment-documents")
      .upload(`${user?.id}/${fileSelected.name}`, fileSelected);

    if (data) {
      toast.success("Archivo cargado con éxito");
    } else {
      toast.error("Error cargando el archivo");
    }
  } */
  const uploadFile = async (e) => {
    const fileSelected = e.target.files[0];

    if (!fileSelected) return;

    const filePath = `${user?.id}/${Date.now()}-${fileSelected.name}`;

    const { data, error } = await supabase.storage
      .from("enrollment-documents")
      .upload(filePath, fileSelected);

    if (error) {
      console.error(error);
      toast.error("Error cargando el archivo");
      return;
    }

    toast.success("Archivo cargado con éxito");
  };

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
                    <h5 className="widget-title pointer">Matrículas</h5>
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
                              setContract(null);
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
                      <div
                        className="post pointer"
                        onClick={() => handleShow("Tarjeta de Identidad")}
                      >
                        <figure className="post-thumb">
                          {/* <Link to="/products-details"> */}
                          <img src={ProductDetailsImg1} alt="Product 1" />
                          {/* </Link> */}
                        </figure>
                        <div className="pointer">Tarjeta de Identidad</div>
                        <span className="price">Pendiente</span>
                      </div>
                      <div
                        className="post"
                        onClick={() => handleShow("Cédula de ciudadanía")}
                      >
                        <figure className="post-thumb">
                          <div className="pointer">
                            <img src={ProductDetailsImg2} alt="Product 2" />
                          </div>
                        </figure>
                        <div className="pointer">Cédula Ciudadania (Copia)</div>
                        <span className="price">Pendiente</span>
                      </div>
                      <div
                        className="post"
                        onClick={() => handleShow("Registro Civil")}
                      >
                        <figure className="post-thumb">
                          <div className="pointer">
                            <img src={ProductDetailsImg3} alt="Product 3" />
                          </div>
                        </figure>
                        <div className="pointer">Registro Civil (Copia)</div>
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
      <FileUpload
        user={user}
        show={show}
        handleClose={handleClose}
        modalTitle={modalTitle}
        upload={uploadFile}
      />
    </>
  );
}

export default Products;
