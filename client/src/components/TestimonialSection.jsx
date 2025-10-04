import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  
{
  name: "Harshit Patel",
  image: "/assets/home/testi5.png",
  review:
    "Sunfood products are amazing! The quality is top-notch and the taste is authentic. I love using them in my daily cooking.",
},
{
  name: "Meenal Desai",
  image: "/assets/home/testi4.png",
  review:
    "Excellent customer service and great product range. Mohal Thal and Sheera are my favorites. Highly recommended!",
},
{
  name: "Ravi Shah",
  image: "/assets/home/testi6.png",
  review:
    "I’ve tried many brands, but Sunfood always stands out. The Rava is so fine and makes perfect dishes every time. Truly satisfied!",
},

];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" data-aos="fade-up">
      <div className="testimonial-container" data-aos="fade-up" data-aos-delay="200">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" data-aos="fade-right" data-aos-delay="200" key={idx}>
            <p className="testimonial-text">{t.review}</p>
            <div className="testimonial-stars">
              {Array(5)
                .fill("★")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>
            <div className="testimonial-img-wrapper">
              <img src={t.image} alt={t.name} className="testimonial-img" />
            </div>
            <h4 className="testimonial-name">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
