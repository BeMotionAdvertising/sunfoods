import React from "react";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <section>
        <div className="what-we-do">
      <div className="what-container">

        {/* Left Image Layout */}
        <div className="image-stack">
          <div className="wcard card-large" data-aos="fade-right"  data-aos-delay="200">
            <img src="/assets/about/whatwe1.png" alt="Mohan Thal & Rava Sheera" />
          </div>
          <div className="wcard card-small dal" data-aos="fade-left"  data-aos-delay="200">
            <img src="/assets/about/whatwe2.png" alt="Gujarati Dal" />
          </div>
          <div className="wcard card-small pulav" data-aos="fade-right"  data-aos-delay="200">
            <img src="/assets/about/whatwe3.png" alt="Pulav" />
          </div>
        </div>

        {/* Right Text Content */}
       <div className="what-text" data-aos="fade-left">
  <h2>What We Do!</h2>
  <p>
    At Sunfoods, we produce high-quality, nutritious, and delicious food products that delight our customers while maintaining sustainable practices.
  </p>
  <ul>
    <li>Source premium ingredients from trusted farms</li>
    <li>Ensure freshness and hygiene in every product</li>
    <li>Offer a variety of traditional and innovative foods</li>
    <li>Maintain eco-friendly and sustainable practices</li>
  </ul>

  <h3>Our Specialties</h3>
  <ul>
    <li>Healthy Dal and Pulses</li>
    <li>Premium Rice and Grains</li>
    <li>Ready-to-Cook and Traditional Foods</li>
    <li>Snacks and Desserts with authentic taste</li>
  </ul>

  <a href="/product" className="more-explore">Explore Our Products</a>
</div>


      </div>
</div>
      {/* Pill Bar Section */}
          <div className="pill-container" data-aos="fade-down">
            <div className="pill-text">
              Offering High Quality Construction Solutions
            </div>
            <button className="pill-button">
              Build Your Dream Now
            </button>
          </div>



          
    </section>
  );
}

export default WhatWeDo;
