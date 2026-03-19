/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../BackToTop.jsx";
import HomeOneHeader from "../HomeOne/HomeOneHeader.jsx";
import FooterHomeOne from "../HomeTwo/FooterHomeOne.jsx";
import HeroPageTitle from "../HeroPageTitle.jsx";
import PortfolioFilter2 from "./PortfolioFilter2.jsx";
import { useSignInStore, useSignUp } from "../../hooks/useSignUp.js";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client.js";
import { FaSignOutAlt } from "react-icons/fa";
import { useDashboardStore } from "../../hooks/useDashboard.js";
import { obtenerIP } from "../../hooks/utils/index.js";
import { FileUpload } from "./FileUpload.jsx";
import toast from "react-hot-toast";
import RequiredDocuments from "./RequiredDocuments.jsx";

const admin_menu = [
  {
    name: "Solicitudes Pendientes",
    action: () => { },
  },
  {
    name: "Solicitudes Completadas",
    action: () => { },
  },
  {
    name: "Pagos",
    action: () => { },
  },
];
const customer_menu = [
  {
    name: "Mi Suscripción",
    action: () => { },
  },
  {
    name: "Agregar Estudiante",
    action: () => { },
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
  const [students, setStudents] = useState([]);
  const [studentSelected, setStudentSelected] = useState(null);
  const [renderFiles, setRenderFiles] = useState([]);

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
          if (user?.role === "admin") {
            setSelected("Nuevas Solicitudes");
          } else {
            setSelected("Mi Suscripción");
          }
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



  const uploadFile = async (file, student, type) => {
    const fileSelected = file.target.files[0];

    if (!fileSelected) return;

    const filePath = `${student.id}/${type}-${student.first_name}${student.last_name}`;

    const { data, error } = await supabase.storage
      .from("enrollment-documents")
      .upload(filePath, fileSelected);

    if (error) {
      console.error(error);
      toast.error("Este archivo ya hasido cargado");
      return;
    }

    toast.success("Archivo cargado con éxito");

    // Actualizar la lista de archivos después de subir uno nuevo
    listFiles(student);
  };

  /* const listFiles = async (student) => {
    const { data, error } = await supabase.storage
      .from("enrollment-documents")
      .list(`${student.id}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      console.error(error);
      toast.error("Error obteniendo los archivos");
      return [];
    }

    console.log("Files:", data);
    setStudentFiles(data);
    return data;
  }; */

  const listFiles = async (student) => {
    let render = [];
    const { data, error } = await supabase.storage
      .from("enrollment-documents")
      .list(`${student.id}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      console.error(error);
      toast.error("Error obteniendo los archivos");
      return [];
    }

    console.log("Files:", data);
    data.forEach((file) => {
      if (file.name.includes("TI")) {
        render.push('TI');
      } else if (file.name.includes("CC")) {
        render.push('CC');
      } else if (file.name.includes("RC")) {
        render.push('RC');
      }
    });
    setRenderFiles(render);
    return data;
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
                      <button disabled onClick={() => { }}>
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
                  students.map((request, index) => (
                    <RequiredDocuments
                      key={index}
                      student={request}
                      handleShow={handleShow}
                      setStudent={setStudentSelected}
                      listFiles={listFiles}
                      renderFiles={renderFiles}
                    />
                  ))
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
                  requests={students}
                  setRequests={setStudents}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHomeOne />
      <BackToTop />
      <FileUpload
        student={studentSelected}
        show={show}
        handleClose={handleClose}
        modalTitle={modalTitle}
        upload={uploadFile}
      />
    </>
  );
}

export default Products;
