/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import ProductDetailsImg1 from "../../assets/images/resource/products/thumb-1.png";
import ProductDetailsImg2 from "../../assets/images/resource/products/thumb-1.png";
import ProductDetailsImg3 from "../../assets/images/resource/products/thumb-3.png";

const RequiredDocuments = ({ student, handleShow, setStudent, renderFiles, listFiles }) => {
    useEffect(() => {
        listFiles(student);
    }, []);


    return (
        <div className="sidebar-widget post-widget">
            <div className="widget-title">
                <h5 className="widget-title">Documentos Requeridos</h5>
                <h5 className="widget-title">
                    {student?.first_name}
                    {student?.last_name}
                </h5>
            </div>
            <div className="post-inner" onClick={() => setStudent(student)}>
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
                    <span className="price" style={{ color: renderFiles.includes('TI') ? 'green' : 'red' }}>
                        {renderFiles.includes('TI') ? 'Archivo cargado' : 'Pendiente'}
                    </span>
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
                    <span className="price" style={{ color: renderFiles.includes('CC') ? 'green' : 'red' }}>
                        {renderFiles.includes('CC') ? 'Archivo cargado' : 'Pendiente'}
                    </span>
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
                    <span className="price" style={{ color: renderFiles.includes('RC') ? 'green' : 'red' }}>
                        {renderFiles.includes('RC') ? 'Archivo cargado' : 'Pendiente'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RequiredDocuments;