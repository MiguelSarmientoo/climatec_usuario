import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: `url(${require("assets/img/pacifico2.jpg")})`,
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">ClimaTec</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
            Transfomando desafíos naturales en oportunidades de seguridad.
            Con alertas precisas e innovación constante,
            construimos un futuro resiliente y protegido para todos.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: `url(${require("assets/img/clouds.png")})`,
            height: "80%",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
