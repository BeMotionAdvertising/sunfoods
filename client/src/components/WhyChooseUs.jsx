
import React, { useEffect, useRef, useState } from "react";
import './WhyChooseUs.css';
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = 15;
    const increment = Math.ceil(end / (1000 / incrementTime));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
  };

  return <span ref={counterRef}>{count}+</span>;
};


const WhyChooseUs = () => {
  return (
    <section className="choose-us-section" data-aos="fade-down" data-aos-delay="100">
      <div className="choose-us-wrapper">
        {/* Left Image */}
        <div className="choose-us-left">
          <div className="yellow-border" data-aos="fade-down" data-aos-delay="200"></div>
          {/* <img src="/assets/home/amritsari.png" alt="Product" className="main-img" /> */}
          <img data-aos="fade-up" data-aos-delay="400" src="/assets/home/whychoose.png" alt="Dish" className="bowl-img" />
        </div>

        {/* Right Content */}
        <div className="choose-us-right">
          <p className="choose-us-tag">Expertise</p>
          <h2 className="choose-us-heading">Why You Should <br /> Choose Us</h2>
          <p className="choose-us-description">
            Sunfood offers high-quality, authentic ingredients made with care. Our products, including Mohal Thal, Rava, and Sheera, are crafted to ensure taste, nutrition, and tradition in every dish.
          </p>



          <div className="choose-us-stats">
            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h3><Counter target="320" /></h3>
             
                 <p>Happy Customers</p>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h3><Counter target="732" /></h3>
              <p>Products Sold</p>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h3><Counter target="50" /></h3>
               <p>Trusted Recipes</p>
            </div>
            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h3><Counter target="12" /></h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
