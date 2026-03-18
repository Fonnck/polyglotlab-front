/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const FileUpload = ({ show, handleClose, modalTitle, upload }) => {
  const [file, setFile] = useState();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      //   style={{ maxHeight: 300 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Subir Archivo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5 py-3">
        <h4 className="pb-3">{modalTitle}</h4>
        <input
          type="file"
          onChange={(e) => {
            console.log("file", e.target.files);
            setFile(e);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="warning"
          onClick={() => {
            (handleClose(), upload(file));
          }}
        >
          Guardar archivo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
