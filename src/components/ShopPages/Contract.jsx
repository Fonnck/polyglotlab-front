/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";
import { useState } from "react";
import { supabase } from "../../supabase/client";
import { useDashboardStore } from "../../hooks/useDashboard";
import toast from "react-hot-toast";

export const Contract = ({ user: student, formValues, setContract }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSelected } = useDashboardStore();

  const styles = StyleSheet.create({
    page: { padding: 30, color: "black" },
    title: {
      margin: 5,
      marginTop: 45,
      padding: 10,
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    subtitle: {
      margin: 5,
      padding: 10,
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    paragraph: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      textAlign: "justify",
    },
    tab: {
      marginLeft: 30,
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      textAlign: "justify",
    },
    section: { margin: 10, paddingL: 10, flexGrow: 1 },
    bulletRow: {
      flexDirection: "row",
      marginBottom: 6,
    },
    bulletPoint: {
      width: 10,
      fontSize: 30,
      lineHeight: 0.6,
      marginLeft: 50,
    },
    bulletText: {
      flex: 1,
      lineHeight: 1.4,
    },
    sign: {
      marginLeft: 5,
      padding: 10,
      flexGrow: 1,
    },
    signText: {
      marginLeft: 5,
      marginTop: 40,
      padding: 10,
      flexGrow: 1,
      fontFamily: "Meow Script",
      fontSize: 30,
      fontWeight: 400,
      fontStyle: "normal",
      textDecoration: "underline",
    },
  });

  function getSignDateRender(date = new Date()) {
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

    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const anio = date.getFullYear();

    return `${dia} días del mes de ${mes} del año ${anio}`;
  }

  const signContract = async () => {
    try {
      await supabase
        .from("enrollments")
        .insert({
          student_id: student?.id,
          signed_date: new Date().getTime() + "",
          contract_ip: localStorage.getItem("public_ip"),
          status: "signed",
          identificationNumber: formValues?.identificationNumber,
          identificationPlace: formValues?.identificationPlace,
          idCardNumber: formValues?.idCardNumber,
          signingCity: formValues?.signingCity,
          program: formValues?.program,
          programRender: formValues?.programRender.render,
        })
        .select()
        .then(({ data, error }) => {
          console.log("enrollment", data);
          setLoading(false);
          if (error === null) {
            toast.success("Contrato Firmado!");
            setSigned(true);
            setTimeout(() => {
              // setLoading(false);
            }, 3000);
          } else {
            // throw error;
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  const DocPdf = () => (
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.title}>
          <Text>
            CONTRATO DE PRESTACIÓN DE SERVICIOS DE EDUCACIÓN NO FORMAL PARA LA
            ENSEÑANZA DE IDIOMA(S) EXTRANJERO(S)
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            En el municipio de Bucaramanga, del departamento de Santander, de la
            República de Colombia, a los dieciséis (16) días del mes de Febrero
            de 2026, entre la sociedad 1) POLYGLOTLAB S.A.S., identificada con
            NIT 902035858-0, representada legalmente por MARÍA GABRIELA OVIEDO
            MARTÍNEZ, mayor de edad, identificada con la cédula de ciudadanía
            número 1.098.801.044, residente en la ciudad de Bucaramanga, quien
            para efectos del presente contrato se denominará EL CONTRATISTA, y
            por la otra 2){" "}
            {`${student?.parent_firstname} ${student?.parent_lastname}`.toUpperCase()}
            , mayor de edad, identificado(a) con cédula de ciudadanía No.{" "}
            {student?.parent_id} de {formValues?.identificationPlace}, obrando
            como Representante Legal del estudiante{" "}
            {`${student?.first_name} ${student?.last_name}`.toUpperCase()},
            identificado con tarjeta de identidad No. {formValues?.idCardNumber}{" "}
            de {formValues?.idCardPlace}, quien para efectos del presente
            contrato se denominará EL CONTRATANTE, en conjunto denominadas LAS
            PARTES, acuerdan celebrar el presente CONTRATO DE PRESTACIÓN DE
            SERVICIOS PROFESIONALES DE EDUCACIÓN NO FORMAL PARA LA ENSEÑANZA DE
            IDIOMA(S) EXTRANJERO(S), el cual se regirá por las cláusulas que a
            continuación se expresan y en general por las disposiciones del
            Código Civil y Código de Comercio aplicables a la materia que trata
            este contrato:
          </Text>
        </View>
        <View style={styles.subtitle}>
          <Text>CLÁUSULAS</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            PRIMERA. OBJETO DEL CONTRATO: EL CONTRATISTA se compromete por sus
            propios medios, bajo su responsabilidad, de manera independiente,
            sin subordinación o dependencia y con sus elementos de trabajo y
            personal a cargo, a prestar sus servicios profesionales DE EDUCACIÓN
            NO FORMAL PARA LA ENSEÑANZA DE IDIOMA(S) EXTRANJERO(S), el cual se
            desarrollará bajo acuerdo y en las instalaciones del COLEGIO
            PSICOPEDAGÓGICO CARL ROGERS. PARÁGRAFO 1: EDUCACIÓN NO FORMAL: Según
            el artículo 2.6.6.8 del Decreto Único Reglamentario del Sector
            Educación 1075 de 26 de mayo de 2015, la educación informal tiene
            como objetivo brindar oportunidades para complementar, actualizar,
            perfeccionar, renovar o profundizar conocimientos, habilidades,
            técnicas y prácticas. PARÁGRAFO 2: Atendiendo a la naturaleza del
            objeto del presente contrato, CONTRATISTA se reserva total autonomía
            de estilo y forma de enseñanza del (los) idioma(s) (inglés y/o
            francés) en concordancia con la liberalidad pedagógica. En ningún
            caso se considerará incumplimiento contractual el cambio
            metodológico que se enmarque dentro de los límites y directrices de
            cumplimiento del objeto de este contrato. PARÁGRAFO 3: EL
            CONTRATISTA manifiesta que tiene el conocimiento y la suficiente
            experiencia en el área contratada, por lo que está en condiciones de
            cumplir con el objeto del presente contrato, comprometiéndose a
            poner todos sus conocimientos, experiencia, concentración y demás
            requisitos necesarios para su cumplimiento oportuno. PARÁGRAFO 4: El
            presente contrato se celebra bajo los postulados de la buena fe de
            conformidad al artículo 83 de la Constitución Política de la
            República de Colombia; cuyo texto corresponde a las conversaciones y
            acuerdos preliminares que libre y voluntariamente llegaron entre LAS
            PARTES. Por lo cual, el presente contrato es ley entre LAS PARTES de
            conformidad al artículo 1602 del Código Civil Colombiano y se
            ejecutará de buena fe conforme a lo dispuesto en el artículo 1603
            del Código Civil Colombiano.
          </Text>
        </View>
        <Page>
          <View style={styles.section}>
            <Text style={styles.paragraph}>
              SEGUNDA. ALCANCE Y PRODUCTOS: El alcance del contrato será el
              siguiente, de acuerdo con las conversaciones y cotizaciones
              sostenidas en las fases previas: A. Alcance detallado de las
              actividades:
            </Text>
            <Text style={styles.tab}>
              1. Impartir de forma idónea y adecuada los cursos del (los)
              idioma(s) INGLÉS Y/O FRANCÉS.
              <br />
              2. Fomentar el refuerzo del aprendizaje e inmersión en las lenguas
              extranjeras de forma didáctica, vivencial y significativa.
              <br />
              3. De conformidad con su criterio, conocimiento y experiencia,
              articular las mejores estrategias que señalan la psicología del
              aprendizaje del idioma, y las habilidades lingüísticas de acuerdo
              al nivel retroalimentando el proceso de enseñanza.
              <br />
              4. Promover espacios de reflexión hacia la proyección global
              <br />
              5. Promover la autonomía del aprendizaje de cada estudiante.
              <br />
              <br />
            </Text>
            <Text style={styles.paragraph}>
              Los ejercicios de prácticas estarán integrados por los siguientes
              componentes adaptados las competencias del nivel matriculado y
              necesidades del grupo:
            </Text>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>&nbsp;
              <Text style={styles.bulletText}>Comprensión oral y escrita</Text>
            </View>
            <br />
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>&nbsp;
              <Text style={styles.bulletText}>Producción oral y escrita</Text>
            </View>
            <br />
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>&nbsp;
              <Text style={styles.bulletText}>Gramática</Text>
            </View>
            <br />
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>&nbsp;
              <Text style={styles.bulletText}>
                Project Based Learning (PBL) Aprendizaje basado en proyectos ABP
              </Text>
            </View>
            <br />
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>&nbsp;
              <Text style={styles.bulletText}>
                Énfasis en habilidades lingüísticas de producción,y habilidades
                sociales
              </Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            PARÁGRAFO ÚNICO: Como experto en la materia y según su criterio
            profesional, EL CONTRATISTA se reserva el derecho de realizar
            ajustes a los componentes referidos, siempre que se mantenga el
            espíritu del servicio contratado y se cumpla con el alcance
            acordado.
          </Text>
          <Text style={styles.paragraph}>
            TERCERA. DURACIÓN DEL CONTRATO: El presente contrato tendrá una
            duración de diez (10) meses, contados a partir del dieciséis (16) de
            febrero de 2026 y hasta el veintidós (22) de noviembre de 2026,
            periodo correspondiente al nivel que será cursado. El nivel se
            entenderá aprobado una vez el estudiante obtenga el certificado de
            aprobación de nivel de libro cursado, certificación que será emitida
            por la respectiva editorial. El presente contrato no está sujeto a
            prórroga automática. En consecuencia, una vez culminado el término
            pactado, se dará por terminada la prestación del servicio y no será
            necesario notificar la no renovación o finalización del servicio.
          </Text>
          <Text style={styles.paragraph}>
            PARÁGRAFO ÚNICO: Tener presente que la impartición de las clases va
            de la mano con los recesos correspondientes al calendario escolar
            manejado en el Colegio Carl Rogers. Recesos previstos: (Semana
            santa, receso de mitad de año de semanas de junio y julio, y receso
            de una semana en octubre). Por lo anterior, el mes de julio se cobra
            la mitad de la mensualidad y todos los meses se pagan completos.
          </Text>
          <Text style={styles.paragraph}>
            CUARTA. OBLIGACIONES DEL CONTRATANTE: Además de las obligaciones
            generales derivadas del marco legal, del presente contrato y oferta
            comercial, el CONTRATANTE se compromete a:
            <br />
          </Text>
          <Text style={styles.tab}>
            1. Cancelar el valor correspondiente al contrato tal y como se
            indica en la forma del pago.
            <br />
            2. Acompañar el proceso de aprendizaje del (de la) estudiante.
            <br />
            3. Mantener durante la ejecución del contrato asegurado(a) al
            estudiante contra accidentes y a un plan obligatorio de salud. El
            cumplimiento de este deber es requisito indispensable para el
            proceso de contratación.
          </Text>
          <Text style={styles.paragraph}>
            QUINTA. OBLIGACIONES DEL CONTRATISTA: En cumplimiento del presente
            contrato, EL CONTRATISTA, además de las obligaciones específicas que
            se deriven de la naturaleza del contrato y de la costumbre local,
            tendrá como obligaciones especiales a su cargo las siguientes:
            <br />
          </Text>
          <Text style={styles.tab}>
            1. Cumplir en forma eficiente y oportuna el servicio contratado.
            <br />
            2. Obrar con diligencia en el servicio prestado.
            <br />
            3. Informar sobre cualquier situación que pueda afectar los
            intereses del CONTRATANTE.
            <br />
            4. Cuando no pueda asistir a una clase programada, deberá informar
            con 24 (veinticuatro) horas de anticipación a menos que se trate de
            un caso fortuito o fuerza mayor, donde deberá dar aviso con la mayor
            anticipación posible, y reponer el tiempo perdido en una clase
            posterior, para lo cual acordará con el CONTRATANTE la fecha y hora
            más oportuna para su ejecución.
          </Text>
          <Text style={styles.paragraph}>
            En caso de que no exista otro grupo disponible en la semana, podrá
            asistir a otro nivel y desarrollar actividades que se abordaron con
            su grupo SEXTA. VALOR DEL CONTRATO Y FORMA DE PAGO: Como valor
            estimado del presente contrato, se ha pactado la suma de 1.a) Ciento
            ochenta y cinco mil pesos ($ 185.000) mensuales por un idioma, y una
            matrícula anual de ciento diez mil pesos ($110.000) o 1.b)
            doscientos ochenta y cinco mil pesos ($285.000) mensuales por dos
            idiomas y una matrícula anual de doscientos mil pesos (200.000) una
            a título de honorarios, valor el cual deberá ser pagado los primeros
            diez (10) días de cada mes. En el caso de Inglés primaria: Explorers
            a Travelers 4, los estudiantes renuevan el libro en Julio, y deben
            adquirir el nuevo libro del siguiente nivel en cien mil pesos
            (100.000)
          </Text>
          <Text style={styles.paragraph}>
            EL CONTRATANTE pagará al CONTRATISTA el valor de la mensualidad, el
            cual será determinado según el alcance del servicio contratado. Para
            ello, EL CONTRATANTE marcará con una X la opción que contrata con el
            CONTRATISTA:
          </Text>
          <Text style={styles.paragraph}>
            EL CONTRATANTE pagará al CONTRATISTA el valor de la mensualidad, el
            cual será determinado según el alcance del servicio contratado. Para
            este caso espécifico EL CONTRATANTE ha decidido optar por la opciòn:
            {` ${formValues?.programRender.render} `} con un valor mensual de: $
            {`${formValues?.programRender.price} `}
          </Text>
          <Text style={{ ...styles.paragraph, color: "gray" }}>
            *Nota a beneficios en pagos: Si son hermanos, uno de ellos recibe un
            5% de descuento. Si un estudiante de otra institución llega referido
            por el acudiente del estudiante, obtienes un 5% de descuento durante
            todo un semestre.
          </Text>
          <Text style={styles.paragraph}>
            MÉTODOS DE PAGO: Secretaría del colegio Carl Rogers (efectivo), y
            modalidad de transferencias indicadas por los medios de
            comunicación.
          </Text>
          <Text style={styles.paragraph}>
            SÉPTIMA. TERMINACIÓN DEL CONTRATO: El presente contrato podrá darse
            por terminado antes del vencimiento del plazo estipulado en los
            siguientes casos:
          </Text>
          <Text style={styles.tab}>
            1. Por vencimiento de su término.
            <br />
            2. Por mutuo acuerdo de LAS PARTES.
            <br />
            3. Por decisión unilateral de EL CONTRATANTE mediante aviso escrito
            con cinco (5) días hábiles de antelación, sin necesidad de
            justificación, ni pago de indemnización alguna, siempre que EL
            CONTRATISTA ejecute las labores correspondientes a los pagos que se
            hubiesen efectuado y EL CONTRATANTE hubiese cancelado los servicios
            prestados. EL CONTRATANTE se compromete expresamente a pagar al
            CONTRATISTA la totalidad de los servicios efectivamente prestados y
            cuyo pago se causó.
            <br />
            4. EL CONTRATISTA podrá dar por terminado de forma unilateral y con
            justa causa el contrato si EL CONTRATANTE presenta mora en dos (2)
            mensualidades.
            <br />
            5. Por incumplimiento de cualquiera de las obligaciones pactadas en
            este documento, sin perjuicio del derecho de la parte cumplida a
            solicitar las indemnizaciones a que haya lugar e iniciar las
            acciones legales pertinentes.
          </Text>
          <Text style={styles.paragraph}>
            OCTAVA. SUSPENSIÓN TEMPORAL DEL CONTRATO: Por circunstancias de
            fuerza mayor o caso fortuito se podrá, de común acuerdo entre LAS
            PARTES, suspender temporalmente la ejecución del CONTRATO, mediante
            la suscripción de un acta donde conste tal evento, sin que para los
            efectos del plazo extintivo se compute el tiempo de la suspensión.
            EL CONTRATANTE podrá suspender el presente contrato por causas
            justificadas, consagradas en la ley y que a su juicio hagan
            necesaria tal suspensión dando aviso al CONTRATISTA con cinco (5)
            días hábiles de anticipación, en cuyo caso, éste renuncia
            expresamente a reclamar perjuicios o indemnizaciones por tal causa.
          </Text>
          <Text style={styles.paragraph}>
            NOVENA. INDEMNIDAD: EL CONTRATANTE indemnizará, saldrá en defensa y
            mantendrá indemne al CONTRATISTA, a sus funcionarios, directores y
            empleados, contra cualquier reclamación, demandas o actuaciones
            similares que resulten, surjan o estén asociadas a las acciones u
            omisiones del CONTRATANTE y que no sean atribuibles al CONTRATISTA.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA. AUTONOMÍA E INDEPENDENCIA EN EL MANEJO DEL PERSONAL: Los
            servicios objeto del presente contrato constituyen una de las
            principales actividades del CONTRATISTA como proveedor independiente
            que es, por ello en desarrollo de las actividades tendrá plena
            libertad y autonomía técnica, administrativa y financiera en la
            ejecución y cumplimiento de las mismas. Conforme a ello, en ningún
            momento se constituye contrato o relación de trabajo alguno entre EL
            CONTRATISTA y las personas que eventualmente EL CONTRATISTA vincule
            para la ejecución de los servicios aquí contratados; razón por la
            cual no habrá lugar a obligaciones a cargo del CONTRATANTE respecto
            al pago de salarios, prestaciones sociales ni demás derechos que
            amparen a trabajadores subordinados o dependientes. PARÁGRAFO ÚNICO:
            Entre LAS PARTES no existirá relación laboral alguna. Sin embargo,
            EL CONTRATISTA propenderá por encauzar las instrucciones sobre el
            desarrollo de las actividades contractuales suministradas por EL
            CONTRATANTE, con el fin de optimizar la ejecución de estas.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA PRIMERA. RESOLUCIÓN DE CONFLICTOS: Todas las diferencias que
            se presenten entre LAS PARTES con ocasión de la ejecución del
            presente contrato o con motivo de su terminación o liquidación,
            serán en primera instancia resueltas directamente por estas. En caso
            de no ser posible su resolución, estas serán sometidas a mecanismos
            alternativos de solución de conflictos como la conciliación en un
            centro debidamente autorizado. Agotada estas etapas y de no ser
            posible el arreglo, LAS PARTES podrán acudir a la jurisdicción
            ordinaria. PARÁGRAFO ÚNICO: Esta disposición no será aplicable para
            las obligaciones que puedan ser exigidas ejecutivamente.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA SEGUNDA. MÉRITO EJECUTIVO: El presente documento presta
            mérito ejecutivo para exigir el pago de la cláusula penal, y de
            cualquier otra suma de dinero a su cargo, resultante de
            incumplimientos contractuales, para lo cual bastará la simple
            afirmación hecha por la parte cumplida en la demanda, y que no podrá
            ser desvirtuada sino con la prueba del cumplimiento de las
            declaraciones contenidas en el presente contrato. PARÁGRAFO ÚNICO:
            Para efectos del presente contrato, la principal obligación cuyo
            cumplimiento podrá ser exigida ejecutivamente es el cobro de los
            acreencias causadas por la prestación de los servicios objeto del
            mismo.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA TERCERA. CONFIDENCIALIDAD Y RESERVA DE LA INFORMACIÓN: Toda
            la información suministrada en virtud del presente contrato, es de
            carácter reservado, por lo tanto, EL CONTRATANTE se compromete a
            guardar indefinidamente la más estricta reserva y a no divulgar a
            terceros o a usar para propósitos distintos del desarrollo del
            objeto contractual, toda o parte de la información a que tengan
            acceso en la ejecución del presente contrato; este también se obliga
            a no extraer de las instalaciones del CONTRATISTA ningún tipo de
            archivo físicos o virtual, excepto cuando por razón de las
            obligaciones y responsabilidades del CONTRATISTA, este requiera
            extraer los mismos, en cuyo caso EL CONTRATANTE deberá obtener
            autorización previa y escrita de EL CONTRATISTA, y devolverá dicha
            información a las instalaciones del CONTRATISTA una vez las
            circunstancias hayan cesado. Por su parte, EL CONTRATISTA se
            compromete a hacer un uso racional y responsable de la información
            que le sea suministrada, siempre encaminado al cumplimiento cabal
            del objeto contractual. PARÁGRAFO ÚNICO: En caso de que un tercero,
            órgano administrativo o judicial competente, requiera la divulgación
            de toda o parte de la información a la que tenga acceso EL
            CONTRATANTE, deberá notificarle al CONTRATISTA de tal requerimiento
            inmediatamente hubiere tenido conocimiento del mismo, y en todo
            caso, antes del vencimiento de los términos previstos en el
            requerimiento para su respuesta. Lo mismo sucederá en la situación
            contraria.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA CUARTA. PROTECCIÓN DE DATOS: EL CONTRATANTE declara
            expresamente que para efectos de la relación civil con EL
            CONTRATISTA suministra datos personales indispensables, opcionales y
            sensibles y que de manera expresa autoriza al CONTRATISTA el
            tratamiento o cualquier operación sobre datos personales, tales como
            la recolección, almacenamiento, uso, circulación o supresión de los
            datos personales del CONTRATANTE que se requieran o que estén
            relacionados con la Institución, con la relación civil y/o con la
            relación pos-contractual. Así mismo, EL CONTRATANTE autoriza la
            transferencia de datos a las entidades públicas o administrativas en
            ejercicio de las competencias legales o por orden judicial; EL
            CONTRATANTE autoriza al CONTRATISTA la transferencia de datos a
            terceros para los fines propios de la institución. EL CONTRATANTE
            declara que se le ha informado de manera clara y comprensible que
            tiene los siguientes derechos: a conocer, actualizar y rectificar
            los datos personales proporcionados; presentar ante la autoridad
            competente quejas por infracciones a lo dispuesto en la ley y las
            demás normas que la modifiquen, adicionen o complementen; revocar la
            presente autorización y/o solicitar la supresión del dato cuando en
            el tratamiento no se respeten los principios, derechos y garantías
            constitucionales y legales; acceder en forma gratuita a los datos
            personales que hayan sido objeto de tratamiento; solicitar prueba de
            la presente autorización, o cualquier otra que suscriba, salvo
            cuando expresamente se exceptúe como requisito para el tratamiento
            de datos de conformidad con la ley, es decir,
          </Text>
          <Text style={{ ...styles.tab, marginLeft: 80 }}>
            a. Información requerida por una entidad pública o administrativa en
            ejercicio de sus funciones legales o por orden judicial.
            <br />
            b. Datos de naturaleza pública.
            <br />
            c. Casos de urgencia médica o sanitaria.
            <br />
            d. Tratamiento de información autorizado por la ley para fines
            históricos, estadísticos o científicos.
            <br />
            e. Datos relacionados con el Registro Civil de las Personas.
          </Text>
          <Text style={styles.paragraph}>
            PARÁGRAFO 1: EL CONTRATANTE autoriza al CONTRATISTA, o a quien
            represente sus derechos, de manera permanente e irrevocable para
            que, con fines estadísticos, de control o supervisión, procese,
            conserve, consulte, suministre o actualice cualquier información de
            carácter personal, desde el momento de la suscripción del contrato
            de prestación de servicios, en los términos y durante el tiempo que
            los sistemas de bases de datos, las normas y las autoridades lo
            establezcan. La consecuencia de esta autorización será la inclusión
            de la información de EL CONTRATISTA en las bases de datos. Lo
            anterior, para dar cumplimiento a la Ley Estatutaria 1581 de 2012 y
            su Decreto Reglamentario 1377 de 2013 “Por la cual se dictan
            disposiciones generales para la protección de datos personales”. EL
            CONTRATANTE declara que la información suministrada, ha sido
            entregada de forma voluntaria y verídica. PARÁGRAFO 2: EL
            CONTRATISTA no utilizará sin autorización previa los datos
            personales DEL CONTRATANTE para fines comerciales.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA QUINTA. DOCUMENTOS: Hacen parte integral de este contrato los
            siguientes documentos:
            <br />
            &nbsp;&nbsp;1. Propuesta de parte del CONTRATISTA.
            <br />
            &nbsp;&nbsp;2. Autorización tratamiento de datos menor de edad.
          </Text>
          {/* <Text style={styles.tab}>
          </Text> */}
          <Text style={styles.paragraph}>
            DÉCIMA SEXTA. NUEVO SERVICIO: Si finalizado el objeto del servicio
            contratado, EL CONTRATANTE necesita un nuevo servicio del
            CONTRATISTA, se deberá hacer un nuevo Contrato de Prestación de
            Servicios y no se entenderá como prorroga por desaparecer las causas
            contractuales que dieron origen a este contrato.
          </Text>
          <Text style={styles.paragraph}>
            DÉCIMA SÉPTIMA. DIRECCIÓN DE LAS PARTES: LAS PARTES constituyen los
            siguientes domicilios, donde tendrán efecto todas las
            notificaciones, sean judiciales o extrajudiciales:
          </Text>
          <Text style={styles.tab}>
            1. Por el CONTRATANTE en la ciudad de Bucaramanga, teléfono
            {` ${student?.parent_phone}`} y correo electrónico{" "}
            {` ${student?.parent_email}`}
            .
            <br />
            2. Por el CONTRATISTA en la ciudad de Bucaramanga , teléfono:
            3154718619 y correo electrónico polyglotlab@gmail.com.
            <br />
            <br />
            Para constancia se firma en la ciudad de Bucaramanga, a los{" "}
            {getSignDateRender()}, en dos ejemplares de igual tenor.
          </Text>
          <View
            className="d-flex justify-content-between"
            style={{ marginTop: 100 }}
          >
            <Text style={styles.sign}>
              EL CONTRATANTE
              <br />
            </Text>
            <Text style={styles.sign}>
              EL CONTRATISTA
              <br />
            </Text>
          </View>
          <View className="d-flex justify-content-between">
            <View className="d-flex flex-column">
              {!signed && (
                <div className="mt-4">
                  <button
                    className="button-74"
                    type="submit"
                    name="submit-form"
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        signContract();
                      }, 1500);
                    }}
                  >
                    <span className={loading ? "blink" : ""}>
                      {loading ? "Firmando..." : "Firmar Contrato"}
                    </span>
                  </button>
                </div>
              )}
              {signed && (
                <Text style={styles.signText} className="reveal-ltr">
                  {`${student?.parent_firstname} ${student?.parent_lastname}`}
                  <br />
                </Text>
              )}
              <Text
                style={{ ...styles.paragraph, paddingTop: 0, marginTop: 0 }}
              >
                <br />
                {`${student?.parent_firstname} ${student?.parent_lastname}`.toUpperCase()}
                <br />
                Acudiente de {` ${student?.first_name} ${student?.last_name}`}
                <br />
                CC. {`${student?.parent_id} de ${formValues?.signingCity}`}.
              </Text>
            </View>
            <View className="d-flex flex-column">
              <Text
                style={styles.signText}
                className={`mx-4 ${!signed ? " blink " : " reveal-ltr "}`}
              >
                Maria Gabriela Oviedo Martinéz
                <br />
              </Text>
              <Text
                style={{ ...styles.paragraph, paddingTop: 0, marginTop: 0 }}
              >
                <br />
                MARÍA GABRIELA OVIEDO MARTÍNEZ
                <br />
                Representante Legal de POLYGLOTLAB SAS
                <br />
                CC. 1.098.801.044 de Bucaramanga.
              </Text>
            </View>
          </View>
        </Page>
      </Page>
    </Document>
  );

  return <DocPdf />;
};
