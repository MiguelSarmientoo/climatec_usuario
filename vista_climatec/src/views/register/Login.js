import React, { useEffect } from "react";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Seccion1 from "components/Navbars/Seccion1.js";

function Login() {
  useEffect(() => {
    document.body.classList.add("login");

    return () => {
      document.body.classList.remove("login");
    };
  }, []);

  return (
    <>
      <Seccion1 />
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${require("assets/img/login-image.jpg")})`,
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Bienvenido</h3>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Inicia Sesión
                  </Button>
                </Form>
                <div className="forgot">
                  <p className="mt-3">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register" className="btn-link text-danger">
                      Regístrate
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

export default Login;
