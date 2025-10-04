import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Rohit Sharma",
    title: "Founder & CEO",
    image: "assets/about/team1.jpg",
  },
  {
    name: "Ananya Patel",
    title: "Head of Production",
    image: "assets/about/team2.jpg",
  },
  {
    name: "Kavita Singh",
    title: "Quality & Compliance Manager",
    image: "assets/about/team3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="fade-right" data-aos-delay={200 + index * 100}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
