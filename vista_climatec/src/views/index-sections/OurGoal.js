import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionOurGoals() {
 return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="mx-auto text-center" lg="8">
              <h2 className="title font-weight-bold">NUESTRO PROPÓSITO</h2>
              <br />
              <p className="description">
              Impulsados por los desafíos surgidos a lo largo de los años, especialmente a raíz de eventos como el Fenómeno del Niño Costero, nosotros, los estudiantes de TECSUP, nos proponemos brindar apoyo a nuestros conciudadanos mediante una alerta precisa y ágil que anticipe posibles desastres.

              </p>
              <br></br>
              <p className="description">
              La esencia de nuestra aplicación radica en ser una herramienta esencial, proporcionando información en tiempo real sobre diversos desastres naturales. Nos comprometemos a ser una solución efectiva y colaborativa para asegurar la seguridad y bienestar de nuestras comunidades.

              </p>
              <br></br>
              <p className="description font-weight-bold">
              Únete a nosotros en este viaje hacia un futuro más seguro y sostenible. Con tu apoyo, trabajaremos incansablemente para ofrecer una solución que marque la diferencia y contribuya a la protección de nuestras comunidades.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
 );
}

export default SectionOurGoals;