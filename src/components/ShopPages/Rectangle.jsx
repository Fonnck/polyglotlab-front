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
import { supabase } from "../../supabase/client";
import toast from "react-hot-toast";

export const Rectangle = ({
  e,
  i,
  setContract,
  role,
  startContract,
  setIndexSelected,
  downLoadFiles,
  refresh
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAuth, setShowAuth] = useState(false);
  const [linkCC, setLinkCC] = useState('');
  const [linkTI, setLinkTI] = useState('');
  const [linkRC, setLinkRC] = useState('');

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
  const getFilesLinks = () => {
    downLoadFiles(e);
  };

  /**
     * Get download URLs for all files inside a folder in a Supabase bucket
     *
     * @param {string} bucket - Name of the storage bucket
     * @param {string} folderId - Folder name (usually your ID)
     * @returns {Promise<string[]>} Array of file download URLs
     */
  async function getFileDownloadLinks() {
    try {
      // 1. List files inside the folder
      const { data: files, error } = await supabase
        .storage
        .from('enrroll-documents')
        .list(e.id, {
          limit: 100,
          offset: 0
        })

      console.log('files', files);

      if (error) {
        throw error
      }

      if (!files || files.length === 0) {
        return []
      }

      // 2. Generate public URLs (for public buckets)
      const links = files.map(file => {
        const filePath = `${folderId}/${file.name}`

        const { data } = supabase
          .storage
          .from(bucket)
          .getPublicUrl(filePath)

        return data.publicUrl
      })

      return links

    } catch (err) {
      console.error('Error fetching files:', err.message)
      return []
    }
  }

  /**
   * Get public URL for a single file in Supabase Storage
   *
   * @param {string} bucket - Name of the bucket
   * @param {string} filePath - Full path to the file (e.g. "folderId/file.pdf")
   * @returns {string|null}
   */
  function getFilePublicUrl(bucket, type) {

    const path = `${e.id}/${type}-${e.first_name} ${e.last_name}.pdf`
    const { data } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(path)

    return data?.publicUrl || null
  }

  /**
   * Get a download URL and validate that the file exists
   *
   * @param {string} bucket - Bucket name
   * @param {string} filePath - Full file path (e.g. "folder/file.pdf")
   * @param {number} expiresIn - Expiration in seconds (default: 1 hour)
   * @returns {Promise<{ url: string|null, error: string|null }>}
   */
  async function getFileUrlSafe(type) {
    try {
      const path = `${e.id}/${type}-${e.first_name}-${e.last_name}.pdf`
      setLoading(true);
      supabase.storage
        .from('enrrol-documents')
        .createSignedUrl(path, 3600)
        .then(({ data, error }) => {
          if (error) {
            toast.error('Documento no cargado aún ');
          }
          else {
            toast.success('Enlace de descarga generado correctamente');
            if (type === 'CC') {
              setLinkCC(data);
            } else if (type === 'TI') {
              setLinkTI(data);
            } else {
              setLinkRC(data);
            }
          }
        })

    } catch (error) {
      toast.error('Documento no cargado aún) ')
    }
  }

  async function loadStudentDocuments(type) {
    const path = `${e.id}/${type}-${e.first_name}-${e.last_name}.pdf`
    setLoading(true);
    try {
      const bucket = 'enrroll-documents'
      // 1. List files in student's folder
      const { data: files, error } = await supabase
        .storage
        .from(bucket)
        .list(e.id)

      if (error) throw error

      if (!files || files.length === 0) return

      // 2. Process each file
      for (const file of files) {
        const filePath = `${e.id}/${file.name}`

        // Generate signed URL
        const { data, error: urlError } = await supabase
          .storage
          .from(bucket)
          .createSignedUrl(filePath, 3600)

        if (urlError) {
          console.error('Error with file:', file.name)
          continue
        }

        const url = data?.signedUrl

        // 3. Detect type by prefix
        if (file.name.startsWith('CC')) {
          setLinkCC(url)
        } else if (file.name.startsWith('TI')) {
          setLinkTI(url)
        } else if (file.name.startsWith('RC')) {
          setLinkRC(url)
        }
      }

    } catch (err) {
      console.error('Error loading student documents:', err.message)
    }
  }

  async function getStudentDocument(type) {

    const bucket = 'enrroll-documents'
    const path = `${e.id}/${type}-${e.first_name}-${e.last_name}.pdf`

    setLoading(true);




    try {
      await supabase
        .storage
        .from(bucket)
        .getPublicUrl(path)
        .then(({ data, error }) => {
          setLoading(false);
          console.log('doing', data);
          if (error) {
            toast.error('Documento no cargado aún');
          } else {
            if (!data?.publicUrl) {
              toast.error('Documento no cargado aún');
              throw new Error('Documento no cargado aún');
            }
            toast.success('Enlace de descarga generado correctamente');
            if (type === 'CC') {
              setLinkCC(data.publicUrl);
            } else if (type === 'TI') {
              setLinkTI(data.publicUrl);
            } else {
              setLinkRC(data.publicUrl);
            }
          }

        }
        )


    } catch (error) {
      setLoading(false);
      toast.error('Error generando el enlace');
      console.error(error);
    }
  }

  return (
    <>
      <div
        key={i}
        className="product-block masonry-item small-column all cat-2 product lenses col-lg-4 col-md-6 col-sm-12"
      >
        <div className="inner-box" style={{ minHeight: "500px" }}>
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
                <Dropdown.Item href={''} target="_blank" onClick={() => getStudentDocument('CC')}>
                  <FaDownload /> {'Cedula de Ciudadania'}
                </Dropdown.Item>
                <Dropdown.Item href={''} target="_blank" onClick={() => getStudentDocument('TI')}>
                  <FaDownload /> {'Tarejta de Identidad'}
                </Dropdown.Item>
                <Dropdown.Item href={''} target="_blank" onClick={() => getStudentDocument('RC')}>
                  <FaDownload /> {'Registro Civil'}
                </Dropdown.Item>
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
