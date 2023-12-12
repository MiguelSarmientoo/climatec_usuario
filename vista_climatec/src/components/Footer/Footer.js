import React from "react";
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  rel="noopener noreferrer"
                >
                  REDES SOCIALES
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DATA
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              2023 . All rights reserved
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
