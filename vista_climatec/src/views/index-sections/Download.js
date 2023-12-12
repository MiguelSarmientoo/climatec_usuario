import React from "react";
import { Container, Row, Col} from "reactstrap";

function Download() {
  return (
    <Container className="section-download">
      <Row className="align-items-center">
        <Col md={{ size: 4, offset: 2 }} className="p-4">
          <h3 className="title font-weight-bold mb-3">Pioneros en un cambio sostenible</h3>
          <div className="d-flex flex-column align-items-start">
          <a href="https://github.com/williampostillos/proyecto_integrador" className="btn btn-danger btn-round mb-2">
            Descargar aplicación móvil
          </a>
          <a href="/login" className="btn btn-info btn-round mb-2">
            Ingresar a la aplicación web
          </a>
        </div>
        </Col>
        <Col md="4" className="p-4">
          <p className="description" style={{ paddingTop: "20px" }}>
            Explora un futuro donde la sostenibilidad es el camino a seguir. Nuestra aplicación móvil te conecta con datos en tiempo real, proporcionándote las herramientas necesarias para tomar decisiones conscientes. 
            </p>
            <p className="description font-weight-bold">Únete a nosotros en este viaje hacia un mundo más verde y equitativo.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Download;
