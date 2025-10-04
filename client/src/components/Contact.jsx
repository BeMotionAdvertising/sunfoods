import './Contact.css';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import { useSliders } from '../hooks/useSliders';

// Import Firebase Firestore functions and your Firebase config
import { db, auth } from '../firebase';  // because from components to src, go up one level
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Contact() {
   const { sliders } = useSliders();
  useEffect(() => {
    document.title = 'Contact Us | Sunfoods';
  }, []);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Handle form submit
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setSuccessMsg("");
//   setErrorMsg("");

//   try {
//     // 1️⃣ Save to Firebase
//     await addDoc(collection(db, "contacts"), {
//       ...formData,
//       userEmail: auth.currentUser?.email || null,
//       timestamp: serverTimestamp(),
//     });

//     // 2️⃣ Send email via Node backend
// await fetch("http://localhost:5000/api/contact", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(formData),
// });


//     setSuccessMsg(`🎉 Thank you, ${formData.name}! Your message has been sent successfully.`);
//     setFormData({ name: "", email: "", title: "", message: "" });
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     setErrorMsg("⚠️ Oops! Something went wrong. Please try again later.");
//   }

//   setLoading(false);
// };


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  try {
    // 1️⃣ Save to Firebase
    await addDoc(collection(db, "contacts"), {
      ...formData,
      userEmail: auth.currentUser?.email || null,
      timestamp: serverTimestamp(),
    });

    // 2️⃣ Send email via PHP backend
    await fetch("https://sunfoods.bemotion.in/contact_email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setSuccessMsg(`🎉 Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", title: "", message: "" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    setErrorMsg("⚠️ Oops! Something went wrong. Please try again later.");
  }

  setLoading(false);
};

  return (
    <section>
      <div className="heros" data-aos="fade-down">
        <div className="heros-img">
         

           <img src={sliders.contact || '/assets/contact/contact_banner.png '}   alt="Delicious Banner"
            className="hero-banner" />
        </div>
      </div>

      <div className='contact-section'>
        <div className="contact-left" data-aos="fade-right" data-aos-delay="200">
          <h2>Get In Touch</h2>
            <p>
      We'd love to hear from you! Reach out for inquiries, feedback, or any questions, and our team will get back to you promptly.
    </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="example@youremail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Title..."
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type Here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Now"}
            </button>

            {successMsg && <p className="success-msg">{successMsg}</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>

        <div className="contact-right" data-aos="fade-left" data-aos-delay="200">
          <div className="info-grid">
            <div className="info-box phone-box">
              <i className="fas fa-phone-alt"></i>
              <h4>Phone</h4>
              <p>(+91) 90816 95000</p>
            </div>
            <div className="info-box whatsapp-box">
              <i className="fab fa-whatsapp"></i>
              <h4>Whatsapp</h4>
              <p>(+91) 90816 95000</p>
            </div>
            <div className="info-box email-box">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>info@shetaexports.com</p>
            </div>
            <div className="info-box office-box">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Office</h4>
              <p>402, City Square, near Ajramar Chowk, Giriraj Society, Adajan, Surat, Gujarat 395009
 </p>
            </div>
          </div>

          <div className="map">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=London&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Contact;
