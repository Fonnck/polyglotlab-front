/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";

const colombiaMainCities = [
  "Armenia",
  "Barranquilla",
  "Bogotá",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Cúcuta",
  "Ibagué",
  "Manizales",
  "Medellín",
  "Montería",
  "Neiva",
  "Palmira",
  "Pasto",
  "Pereira",
  "Popayán",
  "Santa Marta",
  "Sincelejo",
  "Tunja",
  "Valledupar",
  "Villavicencio",
  "Yopal",
];

const programs = [
  {
    label: "SOLO INGLÉS (3 horas semanales) - $185.000",
    value: "ingles_3h_185",
  },
  {
    label: "SOLO FRANCÉS (3 horas semanales) - $185.000",
    value: "frances_3h_185",
  },
  {
    label:
      "ESTUDIANTES POLÍGLOTAS INGLÉS Y FRANCÉS (6 horas semanales) - $285.000",
    value: "poliglotas_6h_285",
  },
];

const DocumentForm = ({ setContract, onSubmitForm, parentIdentification }) => {
  return (
    <div className="py-5">
      <div style={{ maxWidth: "96%", marginBottom: "3rem" }}>
        <span style={{ color: "black" }}>
          *Por favor, confirme y complete la siguiente información requerida
          para continuar con el proceso de matrícula.
        </span>
      </div>
      <Formik
        initialValues={{
          identificationNumber: parentIdentification,
          identificationPlace: "",
          idCardNumber: "",
          idCardPlace: "",
          signingCity: "",
        }}
        onSubmit={(values) => {
          onSubmitForm(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>No. Identificación (Acudiente)</Form.Label>
                  <Form.Control
                    required
                    size="sm"
                    name="identificationNumber"
                    value={values.identificationNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Lugar de Expedición</Form.Label>
                  <Form.Select
                    required
                    name="identificationPlace"
                    value={values.identificationPlace}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una ciudad</option>
                    {colombiaMainCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>No. Tarjeta de Identidad (Estudiante)</Form.Label>
                  <Form.Control
                    required
                    size="sm"
                    name="idCardNumber"
                    value={values.idCardNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Lugar de Expedición Tarjeta de Identidad
                  </Form.Label>
                  <Form.Select
                    required
                    name="idCardPlace"
                    value={values.idCardPlace}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una ciudad</option>
                    {colombiaMainCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Ciudad donde se firma el documento</Form.Label>
                  <Form.Select
                    required
                    name="signingCity"
                    value={values.signingCity}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una ciudad</option>
                    {colombiaMainCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Programa a matricular</Form.Label>
                  <Form.Select
                    required
                    name="program"
                    value={values.program}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione un programa</option>
                    {programs.map((program) => (
                      <option key={program.value} value={program.value}>
                        {program.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div style={{ maxWidth: "96%" }}>
              <span style={{ color: "gray" }}>
                <small>
                  *Al hacer clic en “Confirmar y continuar”, usted confirma que
                  la información proporcionada es veraz y autoriza su uso para
                  fines comerciales y para la firma del contrato de prestación
                  de servicios.
                </small>
              </span>
            </div>

            <div className="d-flex flex-row-reverse gap-5 mt-4">
              <div className="text-start">
                <Button
                  type="button"
                  variant="light"
                  onClick={() => setContract(null)}
                >
                  VOLVER
                </Button>
              </div>
              <div className="w-100">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-50 align-end"
                  style={{ backgroundColor: "#002f49", color: "white" }}
                >
                  CONFIRMAR Y CONTINUAR
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DocumentForm;
