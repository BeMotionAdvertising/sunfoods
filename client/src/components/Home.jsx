import './Home.css';
import { useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import ProductHighlight from './ProductHighlight';
import TestimonialSection from './TestimonialSection';
import ClientLogos from './ClientLogos';
import LatestNews from './LatestNews';
import Footer from './Footer';
import { useSliders } from '../hooks/useSliders';
function Home() {
  const { sliders, loading } = useSliders();
  useEffect(() => {
    document.title = 'Home | Sunfoods';
  }, []);
 if (loading) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }
  return (
    
    <section>
      {/* hero */}
       <div className="hero-img hero" data-aos="fade-down">
        <img
          src={sliders.home1 || '/assets/home/banner.png'}
          alt="Delicious Banner"
          className="hero-banner"
        />
      </div>

      {/* about */}

       <div className="container aboutcontainer" data-aos="fade-down">
        <div className="about-left">
  <h5 className="about-subtitle" data-aos="fade-right" data-aos-delay="100">About Us</h5>
  <h2 className="about-title" data-aos="fade-right" data-aos-delay="200">
   Sun Foods<br />Bringing Taste to Every Home
  </h2>
  <p className="about-text" data-aos="fade-right" data-aos-delay="300">
    Sun Foods is committed to delivering high-quality, hygienically packed foods that bring convenience and taste to your kitchen. 
    Our wide range of products ensures you enjoy delicious and ready-to-serve meals anytime, maintaining freshness and flavor in every bite.
  </p>

  <div className="about-list" data-aos="fade-down">
    <div>
      <p>Convenient & Ready-to-Serve</p>
      <p>High-Quality Ingredients</p>
      <p>Freshness in Every Pack</p>
    </div>
    <div>
      <p>Authentic Taste</p>
      <p>Hygienically Packed</p>
      <p>Delicious & Nutritious</p>
    </div>
  </div>
</div>


        <div className="about-right">
          <div className="about-products">
            <img src="/assets/home/about1.png" id="about1" alt="Gujarati Dal" data-aos="fade-left"  data-aos-delay="100"/>
            <img src="/assets/home/about2.png" id="about2" alt="Dal Dhokli" data-aos="fade-left" data-aos-delay="200"/>
          </div>
          <div className="since-badge">
            <span>Since</span>
            <strong>2013</strong>
          </div>
        </div>
      </div>

      {/* quality */}
      <div class="quality-section" data-aos="fade-down" >

      <div className="quality-container" data-aos="fade-right" >
   <div className="quality-cards">
  <div className="card" data-aos="fade-right" data-aos-delay="200">
    <img src="/assets/home/product3.png" alt="Rava, Sheera, Mohan Thal" />
    <h4>Rava, Sheera, Mohan Thal</h4>
<p>Indulge in our rich and flavorful Rava, Sheera, and Mohan Thal – <br/> perfect for sweet cravings anytime.</p>
<a href='/product' className="learn-btn">Learn More</a>

  </div>
  <div className="card" data-aos="fade-right" data-aos-delay="400">
    <img src="/assets/home/quality2.png" alt="Pav Bhaji" />
    <h4>Pav Bhaji</h4>
    <p>Spicy and flavorful Pav Bhaji, <br/> made with fresh ingredients <br/> for an authentic taste.</p>
    <a href='/product' className="learn-btn">Learn More</a>
  </div>
  <div className="card" data-aos="fade-right" data-aos-delay="600">
    <img src="/assets/home/quality3.png" alt="Gujarati Dal" />
    <h4>Gujarati Dal</h4>
    <p>Traditional Gujarati Dal, <br/> cooked to perfection <br/> with rich flavors.</p>
    <a href='/product' className="learn-btn">Learn More</a>
  </div>
</div>


  <div className="quality-text">
  <h2 data-aos="fade-right" data-aos-delay="100">
    Quality<br />Is Our<br /><span>Promise</span>
  </h2>
  <p data-aos="fade-right" data-aos-delay="200">
    At Sun Foods, we ensure every product is hygienically packed and crafted with care, 
    delivering fresh, delicious, and wholesome foods to your home.
  </p>
  <a href="/product" className="view-more" data-aos="fade-right" data-aos-delay="300">View More</a>
</div>

  </div>
  </div>

{/* Product */}
<div className="our-products-section">
  <div className="our-products-header">
    <div className="our-products-text">
      <p className="our-products-tagline" data-aos="fade-right" data-aos-delay="100">
        Our Products
      </p>
      <h2 className="our-products-heading" data-aos="fade-right" data-aos-delay="200">
        Delicious & Authentic <br />
        Sunfood Products
      </h2>
      <p className="our-products-description" data-aos="fade-right" data-aos-delay="300">
        Explore our wide range of traditional and premium Sunfood products. From Rava, Sheera, Mohan Thal to Pav Bhaji and Gujarati Dal, we ensure authentic taste in every dish.
      </p>
    </div>
    <a href="/product" className="our-products-button desktop-our-products-button" data-aos="fade-left" data-aos-delay="400">
      View More
    </a>
  </div>

  <div className="our-products-grid">
    {/* Product 1 */}
    <div className="our-product-card" data-aos="fade-right" data-aos-delay="200">
      <div className="our-card-divider"></div>
      <img src="/assets/home/product3.png" alt="Rava, Sheera, Mohan Thal" />
      <p className="our-product-subtitle">Traditional Sweets</p>
      <h3 className="our-product-title">Rava, Sheera, Mohan Thal</h3>
      <a  href='/product' className="our-learn-more">Learn More</a>
    </div>

    {/* Product 2 */}
    <div className="our-product-card" data-aos="fade-right" data-aos-delay="400">
      <div className="our-card-divider"></div>
      <img src="/assets/home/product1.png" alt="Pav Bhaji" />
      <p className="our-product-subtitle">Street Food Delight</p>
      <h3 className="our-product-title">Pav Bhaji</h3>
      <a  href='/product' className="our-learn-more">Learn More</a>
    </div>

    {/* Product 3 */}
    <div className="our-product-card" data-aos="fade-right" data-aos-delay="600">
      <div className="our-card-divider"></div>
      <img src="/assets/home/product2.png" alt="Gujarati Dal" />
      <p className="our-product-subtitle">Healthy & Nutritious</p>
      <h3 className="our-product-title">Gujarati Dal</h3>
      <a  href='/product' className="our-learn-more">Learn More</a>
    </div>

    {/* Mobile View Button */}
    <a href="/product" className="our-products-button mobile-our-products-button" data-aos="fade-left" data-aos-delay="400">
      View More
    </a>
  </div>
</div>

<WhyChooseUs/>
   <div className="banner2-img banner2" data-aos="fade-up" data-aos-delay="100">
    <img src={sliders.home2 || '/assets/home/banner2.png '} alt="Delicious Banner" className="banner2-banner" />
    
      </div>


      <ProductHighlight />
      <TestimonialSection/>
      <ClientLogos/>
      <LatestNews/>
    </section>
  );
}

export default Home;
