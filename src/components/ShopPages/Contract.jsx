import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';



export const Contract = () => {

    const styles = StyleSheet.create({
        page: { padding: 30, color: 'black' },
        title: { margin: 5, padding: 10, flexGrow: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' },
        subtitle: { margin: 5, padding: 10, flexGrow: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' },
        paragraph: { margin: 10, padding: 10, flexGrow: 1, display: 'flex', justifyContent: 'center', textAlign: 'justify' },
        section: { margin: 10, paddingL: 10, flexGrow: 1 },
    });

    const DocPdf = () => (
        <Document>
            <Page size="letter" style={styles.page}>
                <View style={styles.title}>
                    <Text>CONTRATO DE PRESTACIÓN DE SERVICIOS DE EDUCACIÓN NO FORMAL PARA LA ENSEÑANZA DE IDIOMA(S) EXTRANJERO(S)</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.paragraph}>
                        En el municipio de Bucaramanga, del departamento de Santander, de la República de Colombia,
                        a los dieciséis (16) días del mes de Febrero de 2026, entre la sociedad 1) POLYGLOTLAB S.A.S.,
                        identificada con NIT XXXXXXXX e inscrita en la Cámara de Comercio de Bucaramanga
                        bajo matrícula No. XXXXXXXX, representada legalmente por  MARÍA GABRIELA OVIEDO MARTÍNEZ,  mayor de edad, identificada con
                        la cédula de ciudadanía número 1.098.801.044, residente en la ciudad de Bucaramanga, quien para efectos del presente contrato
                        se denominará EL CONTRATISTA,
                        y por la otra 2)(_______________________), mayor de edad, identificado(a) con
                        cédula de ciudadanía No. (_______________) de (_______________), obrando como Representante Legal
                        del estudiante (____________________________), identificado con
                        tarjeta de identidad No. (_______________) de (_______________),
                        quien para efectos del presente contrato se denominará EL CONTRATANTE, en conjunto denominadas LAS PARTES,
                        acuerdan celebrar el presente CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES DE EDUCACIÓN NO FORMAL PARA
                        LA ENSEÑANZA DE IDIOMA(S) EXTRANJERO(S), el cual se regirá por las cláusulas que a continuación se expresan
                        y en general por las disposiciones del Código Civil y Código de Comercio aplicables a la materia que trata
                        este contrato:
                    </Text>
                </View>
                <View style={styles.subtitle}>
                    <Text>CLÁUSULAS</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.paragraph}>
                        PRIMERA. OBJETO DEL CONTRATO: EL CONTRATISTA se compromete por sus propios medios, bajo su responsabilidad, de manera independiente, sin subordinación o dependencia y con sus elementos de trabajo y personal a cargo, a prestar sus servicios profesionales DE EDUCACIÓN NO FORMAL PARA LA ENSEÑANZA DE IDIOMA(S) EXTRANJERO(S), el cual se desarrollará bajo acuerdo y en las instalaciones del COLEGIO PSICOPEDAGÓGICO CARL ROGERS.
                        PARÁGRAFO 1: EDUCACIÓN NO FORMAL: Según el artículo 2.6.6.8 del Decreto Único Reglamentario del Sector Educación 1075 de 26 de mayo de 2015, la educación informal tiene como objetivo brindar oportunidades para complementar, actualizar, perfeccionar, renovar o profundizar conocimientos, habilidades, técnicas y prácticas.
                        PARÁGRAFO 2: Atendiendo a la naturaleza del objeto del presente contrato, CONTRATISTA se reserva total autonomía de estilo y forma de enseñanza del (los) idioma(s) (inglés y/o francés) en concordancia con la liberalidad pedagógica. En ningún caso se considerará incumplimiento contractual el cambio metodológico que se enmarque dentro de los límites y directrices de cumplimiento del objeto de este contrato.
                        PARÁGRAFO 3: EL CONTRATISTA manifiesta que tiene el conocimiento y la suficiente experiencia en el área contratada, por lo que está en condiciones de cumplir con el objeto del presente contrato, comprometiéndose a poner todos sus conocimientos, experiencia, concentración y demás requisitos necesarios para su cumplimiento oportuno.
                        PARÁGRAFO 4: El presente contrato se celebra bajo los postulados de la buena fe de conformidad al artículo 83 de la Constitución Política de la República de Colombia; cuyo texto corresponde a las conversaciones y acuerdos preliminares que libre y voluntariamente llegaron entre LAS PARTES. Por lo cual, el presente contrato es ley entre LAS PARTES de conformidad al artículo 1602 del Código Civil Colombiano y se ejecutará de buena fe conforme a lo dispuesto en el artículo 1603 del Código Civil Colombiano.
                    </Text>
                </View>
            </Page>
        </Document>
    )


    return (
        <div style={{ backgroundColor: 'white', width: '100%' }}>
            <DocPdf />
        </div>
    )
}
