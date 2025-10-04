import React, { useEffect, useState } from 'react';
import './About.css';
import WhatWeDo from './WhatWeDo';
import TeamMember from './TeamMember';
import { useSliders } from '../hooks/useSliders';

function About() {
  const { sliders, loading } = useSliders();
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    document.title = 'About Us | Sunfoods';
  }, []);

  // Content for each tab
  const tabContent = {
    mission: "Our mission at Sunfoods is to provide high-quality, nutritious, and delicious food products that enhance the well-being of our customers, while maintaining sustainable and ethical practices in every step of production.",
    vision: "Our vision is to become a trusted household name, recognized globally for exceptional food quality, innovation, and commitment to customer satisfaction.",
    value: "We value integrity, excellence, customer trust, sustainability, and continuous innovation. Every product we make reflects our dedication to these core principles."
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }

  return (
    <section>
      {/* Hero Banner */}
      <div className="heros" data-aos="fade-down">
        <div className="heros-img">
          <img
            src={sliders.about || '/assets/contact/contact_banner.png'}  
            alt="Sunfoods Banner"
            className="hero-banner"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container" data-aos="fade-down">

          {/* Left Content */}
          <div className="about-left" data-aos="fade-right">
            <img src="/assets/about/symbol.png" alt="Sunfoods Symbol" />  
            <span className="about-tag">About Our Company</span>
            <h2 className="about-title">Delivering Quality & Trust</h2>
            <p className="about-desc">
              Sunfoods has been dedicated to providing high-quality food products that bring joy and nutrition to families everywhere. 
              With a focus on sustainability and innovation, we ensure every product meets the highest standards of taste and safety.
            </p>

            {/* Tabs */}
            <div className="about-tabs">
              <button 
                className={activeTab === 'mission' ? 'active' : ''} 
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button 
                className={activeTab === 'vision' ? 'active' : ''} 
                onClick={() => setActiveTab('vision')}
              >
                Our Vision
              </button>
              <button 
                className={activeTab === 'value' ? 'active' : ''} 
                onClick={() => setActiveTab('value')}
              >
                Our Values
              </button>
            </div>

            {/* Tab Content */}
            <p className="about-subdesc">
              {tabContent[activeTab]}
            </p>

            {/* Learn More + Contact */}
            <div className="about-actions">
              <a href="/contact" className="learn-more">Learn More</a>
              <div className="phone">
                <div className="phone-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="phone-text">
                  <span className="discuss">Want to Discuss:</span>
                  <span className="phone-number">(+91) 90816 95000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-right" data-aos="fade-left">
            <div className="about-image">
              <img src="/assets/about/company.png" alt="Sunfoods Company" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <WhatWeDo/>
      <TeamMember/>

      {/* Products Section */}
      <div className="products-section" data-aos="fade-down">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">

          {/* Product Card 1 */}
          <div className="productcard" data-aos="fade-right">
            <a href="/product">
            <img
              src="/assets/about/prod1.png"
              alt="Premium Dal"
              className="product-image"
            />
            </a>
            <div className="product-content">
              <h3 className="product-title">Premium Dal</h3>
              <p className="product-desc">
                Nutritious and high-quality lentils, sourced from trusted farms to ensure freshness and taste.
              </p>
              <div className="tags">
                <span className="tag">Protein Rich</span>
                <span className="tag">Organic</span>
                <span className="tag active">Non-GMO</span>
                <span className="tag">Fresh</span>
              </div>
              <div className="author-date">
                <span className="author">By Sunfoods</span>
                <span className="date">2025</span>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="productcard" data-aos="fade-right">
              <a href="/product">
            <img
              src="/assets/about/prod2.png"
              alt="Premium Rice"
              className="product-image"
            />
            </a>
            <div className="product-content">
              <h3 className="product-title">Premium Rice</h3>
              <p className="product-desc">
                Selected grains offering unmatched aroma and taste, perfect for everyday meals and special occasions.
              </p>
              <div className="tags">
                <span className="tag">Aromatic</span>
                <span className="tag">Gluten-Free</span>
                <span className="tag active">Premium Quality</span>
                <span className="tag">Natural</span>
              </div>
              <div className="author-date">
                <span className="author">By Sunfoods</span>
                <span className="date">2025</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
