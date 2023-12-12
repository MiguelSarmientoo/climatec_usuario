import React from "react";
import { Container, Row, Col } from "reactstrap";
import imagen from '../../assets/img/climatec.png';

function Datos() {
  return (
    <>
      <div className="section">
        <h2 className="title font-weight-bold text-center">EMPLEANDO DATOS EXACTOS PARA <br></br>EL FUTURO DE NUESTRA GENERACIÓN</h2>
        <Container>
          <Row>
            <Col md="5" style={{ marginLeft: "200px", marginRight: "auto" }}>
              <p className="description-download">
                En nuestra incansable búsqueda por la seguridad y bienestar de todos, empleamos datos
                exactos para modelar el futuro de nuestra nación. Cada número, cada tendencia analizada,
                es un ladrillo en la edificación de un mañana más seguro. Esta dedicación a la precisión
                nos guía en la implementación de estrategias preventivas, asegurando respuestas efectivas
                ante cualquier desafío. Así, nuestro compromiso con la exactitud se convierte en el cimiento de una sociedad resiliente.
              </p>
              <p className="description-download font-weight-bold">
                Porque sabemos que en cada dato yace el poder de transformar adversidades en oportunidades, construyendo un futuro sólido y próspero para todos.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area">
              <Row>
              <Col md="12">
                <img src={imagen} alt="Imagen" className="img-fluid" style={{ margin: '-40px auto' }} />
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Datos;
