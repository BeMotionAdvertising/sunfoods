import React from "react";
import "./ProductHighlight.css";
import ProgressBar from "./ProgressBar"; // Import the progress bar component

const ProductHighlight = () => {
  return (
    <section
      className="product-highlight-section"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="product-highlight-wrapper">
  {/* Left Content */}
  <div
    className="product-highlight-left"
    data-aos="fade-right"
    data-aos-delay="200"
  >
    <p className="highlight-tag">Sunfood Products</p>

    <h2 className="highlight-title">
      Mohal Thal, Rava Sheera
    </h2>

    <p className="highlight-description">
      Enjoy the authentic taste of Sunfood products. From the traditional Mohal Thal to
      fine-quality delicious Rava Sheera, each product is made with care
      and premium ingredients to give you the best culinary experience.
    </p>

    {/* Progress Bars */}
    <div className="progress-group">
      <div className="progress-label">
        <span>Mohal Thal</span>
        <span>90%</span>
      </div>
      <ProgressBar percentage="90%" />
    </div>


    <div className="progress-group">
      <div className="progress-label">
        <span>Rava Sheera</span>
        <span>80%</span>
      </div>
      <ProgressBar percentage="80%" />
    </div>
  </div>

  {/* Right Image */}
  <div
    className="product-highlight-right"
    data-aos="fade-left"
    data-aos-delay="300"
  >
    <img
      src="/assets/home/producthighlight.png"
      alt="Sunfood Products"
      className="highlight-img"
    />
  </div>
</div>

    </section>
  );
};

export default ProductHighlight;
