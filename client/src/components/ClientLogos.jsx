import React from "react";
import "./ClientLogos.css";

const logos = [
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
  "/assets/home/logo-removebg-preview.png",
];

const ClientLogos = () => {
  return (
    <section className="client-logo-section" data-aos="fade-up" data-aos-delay="200">
      <div className="logo-marquee">
        <div className="logo-track">
          {logos.concat(logos).map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo} alt={`client-logo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
