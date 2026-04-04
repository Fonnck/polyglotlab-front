/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toTitleCase } from "../../hooks/utils";
import { supabase } from "../../supabase/client";
import toast from "react-hot-toast";
import { useDashboardStore } from "../../hooks/useDashboard";

export const AuthImage = ({ show, handleClose, student, refresh }) => {
  const today = new Date();
  const [signed, setSigned] = useState(student.auth_image);
  const [checked, setChecked] = useState(student.auth_image);
  const { setSelected } = useDashboardStore();

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const signText = {
    marginLeft: 5,
    marginTop: 40,
    padding: 10,
    flexGrow: 1,
    fontFamily: "Meow Script",
    fontSize: 30,
    fontWeight: 400,
    fontStyle: "normal",
    textDecoration: "underline",
  };

  async function updateAuthImage(student_id) {
    try {
      const { data, error } = await supabase
        .from("students")
        .update({ auth_image: true })
        .eq("id", student_id)
        .select();

      if (error) {
        console.error("Error actualizando auth_image:", error.message);
        return null;
      }

      toast.success("Autorización de imagén firmado correctamente");
      setSigned(true);
      refresh(student.parent_id);

      return data;
    } catch (err) {
      console.error("Error inesperado:", err);
      return null;
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      //   style={{ maxHeight: 300 }}
    >
      <Modal.Title>
        <h6 className="p-5" style={{ textAlign: "center" }}>
          AUTORIZACIÓN USO DE FOTOGRAFÍAS, IMÁGENES Y/O VIDEOS PARA PUBLICIDAD
          INSTITUCIONAL, PÁGINA WEB, REVISTA, MAGAZIN Y CELEBRACIONES DE
          ESTUDIANTES MENORES DE EDAD
        </h6>
      </Modal.Title>
      <Modal.Body
        className="px-5 py-3"
        style={{ textAlign: "justify", fontSize: "16px" }}
      >
        Yo,{" "}
        {toTitleCase(student.parent_firstname) +
          " " +
          toTitleCase(student.parent_lastname)}{" "}
        identificado(a) con la Cédula de ciudadanía número {student.parent_id},
        en calidad de Padre/Madre o Representante Legal del (la) menor
        {" " +
          toTitleCase(student.first_name) +
          " " +
          toTitleCase(student.last_name)}
        , de conformidad con lo dispuesto en las normas vigentes sobre
        protección de datos personales, en especial la Ley 1581 de 2012 y el
        Decreto 1074 de 2015, autorizo de manera libre, expresa e inequívoca al
        COLEGIO PSICOPEDAGÓGICO CARL ROGERS y su contratista POLYGLOTLAB S.A.S.,
        para captar y divulgar fotos, audios, videos y otros datos personales de
        mi representado.
        <div
          className="my-3"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Autorización Fotos, Audios, Videos, Otros datos Personales
        </div>
        <div className="my-3" style={{ textAlign: "justify" }}>
          La autorización comprende:
          <br />
          1. Captar, tomar, almacenar, editar imágenes personales o fotografías,
          realizar videos del (la) menor{" "}
          {" " +
            toTitleCase(student.first_name) +
            " " +
            toTitleCase(student.last_name)}
          , estudiante del proyecto POLYGLOTLAB, en la Institución Educativa.
          <br />
          2. Divulgar y publicar las imágenes, audios o datos a través de
          cualquier medio físico, electrónico, virtual o de cualquier otra
          naturaleza pública o privada. Lo anterior con el fin de la protección
          y promoción de los derechos de los niños, niñas, y adolescentes para
          el COLEGIO PSICOPEDAGÓGICO CARL ROGERS y su contratista POLYGLOTLAB
          S.A.S. y sus actuales y futuros productos, servicios y marcas,
          garantizando que las actividades que se realizarán dentro del proyecto
          institucional, no solo se encuentren enmarcadas en el interés superior
          de los niños, niñas y adolescentes, sino también en el respeto a sus
          Derechos Fundamentales.
        </div>
        <div className="my-3" style={{ textAlign: "justify" }}>
          Manifiesto que como representante del menor de edad, titular de la
          información, conozco que la recolección y tratamiento de los datos se
          realizará de conformidad con la Política de Tratamiento de Datos
          Personales publicada en la página web: www.colcarlrogers.com,
          www.polyglotlabacademy.com con lo dispuesto en las normas vigentes
          sobre protección de datos personales, en especial la Ley 1581 de 2012
          y el Decreto 1074 de 2015, así como que fui informado de los derechos
          con que cuenta el titular de la información, especialmente a: conocer,
          actualizar y rectificar la información personal, revocar la
          autorización y solicitar la supresión del dato, las cuales se podrán
          ejercer a través de los canales presenciales, el correo electrónico:
          (servicioalclientecolcarlrogers@gmail.com) y la línea atención:
          3185135972 y 315 4718619.
        </div>
        <div className="my-3" style={{ textAlign: "justify" }}>
          Reconozco que esta autorización se realiza en forma gratuita y, por
          tanto, manifiesto que no se nos adeuda suma alguna por concepto de
          este documento. En consecuencia, me comprometo a no reclamar valor
          alguno por concepto de la utilización que hiciere el COLEGIO
          PSICOPEDAGÓGICO CARL ROGERS, POLYGLOTLAB S.A.S o cualquier otra
          persona, natural o jurídica, o que haya sido autorizada por la entidad
          para la utilización de las imágenes.
        </div>
        <div className="my-3" style={{ textAlign: "justify" }}>
          Reconozco que esta autorización se realiza en forma gratuita y, por
          tanto, manifiesto que no se nos adeuda suma alguna por concepto de
          este documento. En consecuencia, me comprometo a no reclamar valor
          alguno por concepto de la utilización que hiciere el COLEGIO
          PSICOPEDAGÓGICO CARL ROGERS, POLYGLOTLAB S.A.S o cualquier otra
          persona, natural o jurídica, o que haya sido autorizada por la entidad
          para la utilización de las imágenes.
        </div>
        <div className="my-3" style={{ textAlign: "justify" }}>
          Para constancia se firma en la ciudad de Bucaramanga, a los{" "}
          {today.getDate()} días del mes de {meses[today.getMonth()]} de{" "}
          {today.getFullYear()}.
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <input
            disabled={student.auth_image}
            className="mt-2 py-1"
            type="checkbox"
            id="consentimiento"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="consentimiento" style={{ cursor: "pointer" }}>
            Al hacer clic en esta casilla autorizo explícitamente lo estipulado
            en este documento
          </label>
        </div>
        <div
          className="my-3"
          style={{ textAlign: "justify", fontWeight: "bolder" }}
        >
          Autoriza:
        </div>
        <div
          className={`my-3 ${!signed ? " blink " : " reveal-ltr "}`}
          style={{
            ...signText,
            textAlign: "justify",
            fontWeight: "bolder",
            color: !signed ? "" : "black",
          }}
        >
          {toTitleCase(student.parent_firstname) +
            " " +
            toTitleCase(student.parent_lastname)}{" "}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Volver
        </Button>
        {!student.auth_image && !signed && (
          <Button
            disabled={!checked}
            variant="warning"
            onClick={() => {
              updateAuthImage(student.id);
              // handleClose();
            }}
          >
            Firmar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
