import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3">MediaAMP</h5>
            <p>
              Explore, play, and discover your favorite games. Your ultimate game companion.
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="/genre" className="text-white-50 text-decoration-none">Genres</a></li>
              <li><a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
              <li><a href="/login" className="text-white-50 text-decoration-none">Login</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-uppercase mb-3">Contact</h6>
            <p>Email: support@mediaamp.com</p>
            <p>Phone: +917791079791</p>
            <p>Address:jiet jodhpur,mogra,rajasthan,india,342001y</p>
          </Col>

          <Col md={3} className="mb-4 text-md-end text-center">
            <h6 className="text-uppercase mb-3">Follow Us</h6>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center text-white-50 pt-3">
            © 2025 MediaAMP. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
