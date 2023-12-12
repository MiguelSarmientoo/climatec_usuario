import React from "react";
import { Col } from "reactstrap";
import imagen1 from '../../assets/img/air quality 1.png';
import imagen2 from '../../assets/img/eco diversity 1.png';
import imagen3 from '../../assets/img/flod 2.png';
import imagen4 from '../../assets/img/global warming 1.png';
import imagen5 from '../../assets/img/wildfire 1.png';
import imagen6 from '../../assets/img/enfermedades.png';

function GallerySection() {
  return (
    <div className="gallery-container">
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen1} alt="Imagen 1" className="w-100 h-auto gallery-image" />
          <p className="image-text">Gases de Efecto Invernadero</p>
        </div>
      </Col>
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen2} alt="Imagen 2" className="w-100 h-auto gallery-image" />
          <p className="image-text">Falta de Biodiversidad</p>
        </div>
      </Col>
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen3} alt="Imagen 3" className="w-100 h-auto gallery-image" />
          <p className="image-text">Inundaciones</p>
        </div>
      </Col>
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen4} alt="Imagen 4" className="w-100 h-auto gallery-image" />
          <p className="image-text">Calentamiento Global</p>
        </div>
      </Col>
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen5} alt="Imagen 5" className="w-100 h-auto gallery-image" />
          <p className="image-text">Incendios Forestales</p>
        </div>
      </Col>
      <Col xs="6" md="2" className="gallery-item">
        <div className="gallery-item">
          <img src={imagen6} alt="Imagen 6" className="w-100 h-auto gallery-image" />
          <p className="image-text">Enfermedades</p>
        </div>
      </Col>
    </div>
  );
}

export default GallerySection;
