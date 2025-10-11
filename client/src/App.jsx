import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Public components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import GetInTouch from './components/Contact';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

// Admin components
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AdminSliders from './admin/AdminSliders';
import AdminContacts from './admin/AdminContacts';
import AdminAvailability from './admin/AdminAvailability';
import AdminLayout from './admin/AdminLayout';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />

          {/* 🔑 Admin Routes (No Protection) */}
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/admin-dashboard"
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin-products"
            element={
              <AdminLayout>
                <AdminProducts />
              </AdminLayout>
            }
          />
          <Route
            path="/admin-sliders"
            element={
              <AdminLayout>
                <AdminSliders />
              </AdminLayout>
            }
          />
          <Route
            path="/admin-contacts"
            element={
              <AdminLayout>
                <AdminContacts />
              </AdminLayout>
            }
          />
          <Route
            path="/admin-availability"
            element={
              <AdminLayout>
                <AdminAvailability />
              </AdminLayout>
            }
          />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
