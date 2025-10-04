import React from "react";
import "./LatestNews.css";

const newsItems = [
  {
    date: "10",
    month: "Sep",
    image: "/assets/home/news1.png",
    title: "Sunfoods Launches Organic Lentils",
    description:
      "We are excited to announce the launch of our premium organic lentils, sourced directly from trusted Indian farms to ensure freshness and quality.",
  },
  {
    date: "25",
    month: "Aug",
    image: "/assets/home/news2.png",
    title: "Sustainable Packaging Initiative",
    description:
      "Sunfoods introduces eco-friendly packaging for all products, reinforcing our commitment to sustainability and reducing environmental impact.",
  },
  {
    date: "15",
    month: "Jul",
    image: "/assets/home/news3.png",
    title: "New Ready-to-Cook Range",
    description:
      "Our latest Ready-to-Cook meals bring convenience and authentic flavors to your kitchen, crafted with care using natural ingredients.",
  }
];

const LatestNews = () => {
  return (
    <section className="latest-news-section" data-aos="fade-up">
      <div className="news-header">
        <div>
          <p className="news-subtitle" data-aos="fade-right" data-aos-delay="200">Our Blog</p>
          <h2 className="news-title" data-aos="fade-right" data-aos-delay="200">Latest News</h2>
        </div>
        <a href="/product" className="view-more-btn" data-aos="fade-left" data-aos-delay="200">View More</a>
      </div>

      <div className="news-marquee" data-aos="fade-up" data-aos-delay="200">
        <div className="news-track">
          {newsItems.concat(newsItems).map((item, idx) => (
            <div className="news-card" key={idx}>
              <div className="news-img">
                <img src={item.image} alt={item.title} />
                <div className="news-date">
                  <strong>{item.date}</strong><br/>
                  <span>{item.month}</span>
                </div>
              </div>
              <div className="news-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href="/product">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
