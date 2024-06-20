import React from "react";
import "./Footer.css"
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer__links-wrapper">
        <div className="footer__links-container">
          <h4 className="footer__links-title">Contacto</h4>
          <ul>
            <li>
              Teléfono:{" "}
              <a
                href="tel:+1800-001-658"
                aria-label="Call us at +1800-001-658"
                className="footer__link"
              >
                +1800-001-658
              </a>
            </li>
            <li>
              Correo:{" "}
              <a
                href="info@mitienda.com"
                aria-label="Envianos un mail a info@mitienda.com"
                className="footer__link"
              >
                info@mitienda.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links-container">
          <h4 className="footer__links-title">Redes Sociales</h4>
          <ul className="footer__links-social_list">
            <li>
              <a href="#" aria-label="link to our Facebook page">
                <LuFacebook aria-hidden className="footer__link-icon"/>
              </a>
            </li>
            <li>
              <a href="#" aria-label="link to our Instagram page">
                <LuInstagram aria-hidden className="footer__link-icon"/>
              </a>
            </li>
            <li>
              <a href="#" aria-label="link to our Twitter page">
                <LuTwitter aria-hidden className="footer__link-icon"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links-container">
          <h4 className="footer__links-title">Dirección</h4>
          <address>
            Calle Principal, 123 <br />
            <span>Madrid, España.</span>
          </address>
        </div>
      </div>
      <div className="footer__copyright">
        ©2024 MiTienda. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
