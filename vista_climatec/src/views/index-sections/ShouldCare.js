import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionWhyCare() {
 return (
    <>
      <div className="section section-why-care">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title font-weight-bold">¿POR QUÉ DEBERIA IMPORTARNOS?</h2>
              <Row className="justify-content-center">
                <Col md="6">
                 <h4 className="subtitle font-weight-bold mb-3">¿CUÁL ES EL PROBLEMA?</h4>
                 <p className="description">
                    Comprender los riesgos y desafíos relacionados con desastres naturales es crucial para la seguridad y el bienestar de nuestras comunidades. Al conocer estos eventos, podemos estar mejor preparados para responder de manera efectiva y minimizar los impactos.
                 </p>
                </Col>
                <Col md="6">
                 <h4 className="subtitle font-weight-bold mb-3">¿CUAL SERIA LA SOLUCIÓN?</h4>
                 <p className="description">
                    Además de la importancia para la seguridad, la información sobre desastres proporciona insights valiosos para la planificación a largo plazo. Ayuda a tomar decisiones informadas sobre el desarrollo de infraestructuras resilientes y la gestión de recursos para crear comunidades más fuertes.
                 </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
 );
}

export default SectionWhyCare;