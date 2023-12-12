import React, { useEffect } from "react";
import { Button, Card, Form, Input, Container, Row, Col, FormGroup } from "reactstrap";
import { Link } from "react-router-dom"; 
import Seccion1 from "components/Navbars/Seccion1.js";

function Register() {
  useEffect(() => {
    document.body.classList.add("register");

    return () => {
      document.body.classList.remove("register");
    };
  }, []);

  return (
    <>
      <Seccion1 />
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${require("assets/img/login.jpg")})`,
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Registro</h3>
                <Form className="register-form">
                  <FormGroup>
                    <label>Nombre</label>
                    <Input placeholder="Nombre" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Apellido</label>
                    <Input placeholder="Apellido" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Email</label>
                    <Input placeholder="Email" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <label>Contraseña</label>
                    <Input placeholder="Contraseña" type="password" />
                  </FormGroup>
                  <Button block className="btn-round" color="danger">
                    Registrar
                  </Button>
                </Form>
                <div className="forgot">
                    <p className="mt-3">
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="btn-link text-danger">
                    Inicia Sesión
                  </Link>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()} - MADE BY CLIMATEC</h6>
        </div>
      </div>
    </>
  );
}

export default Register;
