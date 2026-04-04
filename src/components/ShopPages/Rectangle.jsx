/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Boy from "../../assets/images/boy.png";
import Girl from "../../assets/images/girl.png";
import { useState } from "react";
import { Quixote } from "./DownLoadPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { toTitleCase } from "../../hooks/utils";
import { FaDownload } from "react-icons/fa";
import { useDashboard, useDashboardStore } from "../../hooks/useDashboard";
import { AuthImage } from "./AuthImage";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const Rectangle = ({
  e,
  i,
  setContract,
  role,
  startContract,
  setIndexSelected,
  downLoadFiles,
  refresh,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAuth, setShowAuth] = useState(false);

  const handleCloseAuth = () => setShowAuth(false);
  const handleShowAuth = () => setShowAuth(true);
  const { updateStudentStatus } = useDashboard();

  const getProgram = (language) => {
    if (language == "english") {
      return "Inglés";
    } else if (language == "french") {
      return "Fránces";
    } else {
      return "Inglés y Francés";
    }
  };

  const getColorStatus = (status) => {
    if (status == "inactive") {
      return "#780001";
    } else if (status == "pending") {
      return "#ffae1e";
    } else {
      return "green";
    }
  };

  const getStatusRender = (status) => {
    if (status == "inactive") {
      return "Inactivo";
    } else if (status == "pending") {
      return "Pendiente";
    } else {
      return "Activo";
    }
  };

  const { setSelected } = useDashboardStore();

  const downloadFiles = () => {
    downLoadFiles(e);
  };

  return (
    <>
      <div
        key={i}
        className="product-block masonry-item small-column all cat-2 product lenses col-lg-4 col-md-6 col-sm-12"
      >
        <div className="inner-box">
          <div className="image-box">
            <div
              className="image"
              style={{ maxWidth: "60%", margin: "0 auto" }}
            >
              <img src={e.gender === "boy" ? Boy : Girl} alt="Img" />
            </div>
          </div>
          <div className="content d-flex flex-column align-items-center pb-0">
            <small>
              <small style={{ color: getColorStatus(e.status) }}>
                {getStatusRender(e.status)}
              </small>
            </small>
            <h4>{toTitleCase(`${e.first_name} ${e.last_name}`)}</h4>
            <span className="price">
              <b>{getProgram(e.language)}</b>
            </span>
            <div className="d-flex flex-column mt-4">
              <div className="d-flex">
                <span className="price">{toTitleCase(e.parent_firstname)}</span>
                &nbsp;
                <span className="price">{toTitleCase(e.parent_lastname)}</span>
              </div>
              <span className="price">{e.parent_id}</span>
            </div>
            {/* <span className="price">{e.parent_email}</span> */}
          </div>
          <div className="d-flex justify-content-between gap-2 p-4 flex-column">
            {e.status === "inactive" && role === "customer" && (
              <span className="button_top">
                Una vez se hábilite la mátricula, podra realizar el trámite
                desde aquí.
              </span>
            )}
            {e.status === "pending" && role === "customer" && (
              <button
                className="_button"
                onClick={() => {
                  startContract();
                  setIndexSelected(i);
                }}
              >
                <span className="button_top">Iniciar Mátricula</span>
              </button>
            )}
            {e.status === "inactive" && !show && role === "admin" && (
              <button className="_button" onClick={() => handleShow()}>
                <span className="button_top"> Enviar a Firmar</span>
              </button>
            )}
            {show && (
              <div className="d-flex gap-4" style={{ margin: "0 auto" }}>
                <button
                  className="_button"
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleClose()}
                >
                  <span className="button_top"> Cancelar</span>
                </button>
                <button
                  className="_button"
                  style={{ backgroundColor: "green" }}
                  onClick={() =>
                    updateStudentStatus(e.id, { status: "pending" })
                  }
                >
                  <span className="button_top"> Confirmar </span>
                </button>
              </div>
            )}
            {role === "admin" && (
              <DropdownButton
                id="dropdown-basic-button"
                title="Descargar Documentos"
                variant="outline-secondary"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item href="#/action-1">
                  Cédula de Ciudadania
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Tarjeta de Identidad
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Registro Civil</Dropdown.Item>
              </DropdownButton>
            )}
            {e.status === "active" && (
              <PDFDownloadLink document={<Quixote />} fileName="documento.pdf">
                {({ loading }) =>
                  loading ? (
                    <span>Generando PDF...</span>
                  ) : (
                    <button
                      className="button-74"
                      onClick={() => {
                        setIndexSelected(i);
                        console.log(i);
                        setContract(4);
                        setSelected(
                          role === "admin"
                            ? "Contrato Firmado"
                            : "Mi Suscripción",
                        );
                      }}
                    >
                      Ver Contrato Firmado
                    </button>
                  )
                }
              </PDFDownloadLink>
            )}
            {e.status === "active" && role === "customer" && !e.auth_image && (
              <div className="mt-3">
                <a onClick={handleShowAuth}>Autorizar uso de Imagén</a>
              </div>
            )}
            {e.status === "active" && e.auth_image && (
              <div className="mt-3" style={{ color: "green" }}>
                <a onClick={handleShowAuth}>Uso de imagén autorizado</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <AuthImage
        handleClose={handleCloseAuth}
        show={showAuth}
        student={e}
        refresh={refresh}
      />
    </>
  );
};
