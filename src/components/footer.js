import { Link } from "gatsby"
import React from "react"
import { Logo } from "../utils/imgImport"
import {
  footer_menu1,
  footer_menu2,
  footer_menu3,
  footer_menu4,
  footer_menu5,
} from "../utils/staticData"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="d-flex justify-content-between mb-5">
        <Row>
          <h3 className="mb-3 label">Sobre Nosotros</h3>
          <ul>
            {footer_menu1.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <h3 className="mb-3 label">Comunidad</h3>
          <ul>
            {footer_menu2.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <h3 className="mb-3 label">Contacto</h3>
          <ul>
            {footer_menu3.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <h3 className="mb-3 label">Con el apoyo de:</h3>
          <ul>
            {footer_menu4.map((item, idx) => (
              <li key={idx}>
                <a href={item.to} className="nav-link">
                  <img src={item.icon} alt="backer" />
                </a>
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <h3 className="mb-3 label">Encuéntranos en:</h3>
          <ul className="social-links">
            {footer_menu5.map((item, idx) => (
              <li key={idx}>
                <a href={item.to} className="nav-link">
                  <img src={item.icon} alt="social" />
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </div>
      <p className="bottom-bar">
        <Link to="/">
          <img className="footer-logo" src={Logo} alt="logo" />
        </Link>
        todos los derechos reservados @patrimore.cl
      </p>
    </div>
  </footer>
)

export default Footer
