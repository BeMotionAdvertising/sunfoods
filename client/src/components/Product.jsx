// import React from 'react';
// import './Product.css';
// import { useEffect } from 'react';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';
// const products = [
//   {
//     id: 1,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product1.png',
//   },
//   {
//     id: 2,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product2.png',
//   },
//   {
//     id: 3,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product3.png',
//   },
//   {
//     id: 4,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product4.png',
//   },
//   {
//     id: 5,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product5.png',
//   },
//   {
//     id: 6,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product6.png',
//   },
//   {
//     id: 7,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product7.png',
//   },
//   {
//     id: 8,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product8.png',
//   },
//   {
//     id: 9,
//     name: 'Share Pulav – 150gm',
//     price: '₹150',
//     image: '/assets/products/product9.png',
//   },
// ];

// function Product() {
//     useEffect(() => {
//     document.title = 'Products | Sunfoods';
//   }, []);

//   return (
//     <section className="product-section">
//       {/* Hero Banner */}
//       <div className="hero-img hero" data-aos="fade-down"  >
//         <img
//           src="/assets/products/product-banner.png"
//           alt="Delicious Banner"
//           className="hero-banner"
//         />
//       </div>

//       {/* Product Listing */}
//       <div className="listing-container" data-aos="fade-up"  data-aos-delay="200" >
//         <div className="listing-header">
//           <p>Available Listings You May Like :</p>
//           <div className="search-box">
//             <input type="text" placeholder="Search Name..." />
//             <button>
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
//         </div>

//         <div className="product-grid">
//           {products.map((product) => (
//             <div className="product-card" key={product.id} data-aos="fade-up" data-aos-delay="400">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>From {product.price}</p>
//               <div className="stars" data-aos="fade-right">
//                 ★★★★★ <span>8 Review</span>
//               </div>
//         <Link to="/product-details" onClick={() => setMenuOpen(false)}>  <button className="get-details-btn" data-aos="fade-right">Get Details</button></Link>

            
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Product;
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // adjust path as needed
import { Link } from "react-router-dom";
import "./Product.css";
import { useSliders } from '../hooks/useSliders';

function Product() {
  const { sliders, loading } = useSliders();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Products | Sunfoods";

    // Fetch products from Firestore on mount
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   if (loading) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }

  return (
    <section className="product-section">
      {/* Hero Banner */}
      <div className="hero-img hero" data-aos="fade-down">
       
         <img src={sliders.product || '/assets/products/product-banner.png '}  alt="Delicious Banner"
          className="hero-banner" />
    
      </div>

      {/* Product Listing */}
      <div className="listing-container" data-aos="fade-up" data-aos-delay="200">
        <div className="listing-header">
          <p>Available Listings You May Like :</p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay="400"
              >
               <img
  src={product.image || "/assets/products/product1.png"}
  alt={product.name || "Product image"}
/>
                <h3>{product.name}</h3>
                <p>
                  {product.price
                    ? `From ₹${Number(product.price).toLocaleString()}`
                    : "Price unavailable"}
                </p>
                <div className="stars" data-aos="fade-right">
                  ★★★★★{" "}
                  <span>
                    {product.reviewsCount || 8} Review
                    {product.reviewsCount === 1 ? "" : "s"}
                  </span>
                </div>
                <Link to={`/product-details/${product.id}`}>
                  <button
                    className="get-details-btn"
                    data-aos="fade-right"
                    type="button"
                  >
                    Get Details
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
