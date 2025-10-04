import './Navbar.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = "/assets/home/logo.png";
    }
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <nav className="navbar">
      <div>
       
        <Link to="/" onClick={() => setMenuOpen(false)}><img  src="/assets/home/logo.png" className="logo" alt="Logo" /></Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
        <li className="highlight"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
