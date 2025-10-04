import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer" data-aos="fade-down" data-aos-delay="200">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <img src="/assets/home/footerlogo.png" alt="InstaFood" className="footer-logo" />
          <p>
        SunFood brings you high-quality, authentic ingredients like Mohal Thal, Rava, and Sheera.
        Enjoy traditional flavors crafted with care and love in every product.
      </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Further Links</h4>
          <ul>
            <li><Link to="/terms">Term & Condition</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/careers">Recruitment</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="contact-info">
         <li>
  <FaMapMarkerAlt />{" "}
  <a
    href="https://www.google.com/maps/search/?q=125142, 402, City Square, near Ajramar Chowk, Giriraj Society, Adajan, Surat, Gujarat 395009"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    402, City Square, near Ajramar Chowk, Giriraj Society, Adajan, Surat, Gujarat 395009
  </a>
</li>

<li>
  <FaPhoneAlt />{" "}
  <a
    href="tel:9081695000"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
 (+91) 90816 95000
  </a>
</li>

         <li>
  <FaEnvelope />{" "}
  <a href="mailto:support@site.com" style={{ textDecoration: 'none', color: 'inherit' }}>
   info@shetaexports.com
  </a>
</li>

          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 | Powered by BeMotion</p>
      </div>
    </footer>
  );
};

export default Footer;
