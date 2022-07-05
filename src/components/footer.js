import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Logo } from "../utils/imgImport"
import {
  footer_menu1,
  footer_menu2,
  footer_menu3,
  footer_menu4,
  footer_menu5,
} from "../utils/staticData"
import { Typography } from "./styled"

const Row = styled.div``

const Footer = () => (
  <footer>
    <div className="container">
      <div className="d-flex justify-content-between mb-5">
        <Row>
          <Typography
            className="mb-3"
            weight={700}
            size={16}
            height={18}
            color="#172635"
          >
            Sobre Nosotros
          </Typography>
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
          <Typography
            className="mb-3"
            weight={700}
            size={16}
            height={18}
            color="#172635"
          >
            Comunidad
          </Typography>
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
          <Typography
            className="mb-3"
            weight={700}
            size={16}
            height={18}
            color="#172635"
          >
            Contacto
          </Typography>
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
          <Typography
            className="mb-3"
            weight={700}
            size={16}
            height={18}
            color="#172635"
          >
            Con el apoyo de:
          </Typography>
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
          <Typography
            className="mb-3"
            weight={700}
            size={16}
            height={18}
            color="#172635"
          >
            Encuéntranos en:
          </Typography>
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
      <Typography className="bottom-bar" size={14} height={18} align="center">
        <Link to="/">
          <img className="footer-logo" src={Logo} alt="logo" />
        </Link>
        todos los derechos reservados @patrimore.cl
      </Typography>
    </div>
  </footer>
)

export default Footer
