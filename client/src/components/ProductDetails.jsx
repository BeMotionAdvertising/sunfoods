// import React, { useEffect, useRef } from 'react';
// import './ProductDetails.css';
// import Footer from './Footer';
// import { useState } from 'react';
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from '../firebase'; // adjust path as needed


// const products = [
//   { id: 1, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product1.png' },
//   { id: 2, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product2.png' },
//   { id: 3, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product3.png' },
//   { id: 4, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product4.png' },
//   { id: 5, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product5.png' },
//   { id: 5, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product6.png' },
//   { id: 5, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product7.png' },
//   { id: 5, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product8.png' },
//   { id: 5, name: 'Share Pulav – 150gm', price: '₹150', image: '/assets/products/product9.png' },


// ];


// function Product() {

  
// const [availabilityForm, setAvailabilityForm] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   message: "Hi I'm interested in this product. What is your best offer? Thanks",
// });

// const [feedbackMsg, setFeedbackMsg] = useState('');
// const [submitting, setSubmitting] = useState(false);

//   const scrollRef = useRef(null);

// const handleAvailabilityChange = (e) => {
//   setAvailabilityForm({
//     ...availabilityForm,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleAvailabilitySubmit = async (e) => {
//   e.preventDefault();
//   setSubmitting(true);
//   setFeedbackMsg('');

//   try {
//     await addDoc(collection(db, "availabilityRequests"), {
//       ...availabilityForm,
//       timestamp: serverTimestamp(),
//       productName: "Share Amritsari Chhole Gravy - 60gm", // or dynamic product name if you want
//     });
//     setFeedbackMsg('Thank you! Your request has been submitted.');
//     setAvailabilityForm({
//       name: '',
//       email: '',
//       phone: '',
//       message: "Hi I'm interested in this product. What is your best offer? Thanks",
//     });
//   } catch (error) {
//     console.error("Error submitting availability request:", error);
//     setFeedbackMsg('Sorry, something went wrong. Please try again later.');
//   } finally {
//     setSubmitting(false);
//   }
// };

//   useEffect(() => {
//     document.title = 'Products | Sunfoods';

//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const scrollStep = () => {
//       if (!scrollContainer) return;
//       scrollContainer.scrollLeft += 1; // speed
//       scrollAmount += 1;

//       // Reset to start when reaching end
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//         scrollContainer.scrollLeft = 0;
//         scrollAmount = 0;
//       }
//     };

//     const interval = setInterval(scrollStep, 20); // speed interval
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section>

         

       
//       <div className="hero-img hero" data-aos="fade-down">
//         <img src="/assets/products/product-banner.png" alt="Delicious Banner" className="hero-banner" />
//       </div>


//  <section className="product-detail">
//       {/* Left Column */}
//       <div className="product-left" data-aos="fade-right">
//         <h1>Share Amritsari Chhole Gravy - 60gm</h1>
//         <p className="sold-info">5 Sold In Last 25 Hours</p>
//         <p className="price">
//       <span style={{ color: "#FFBE00" }}>From</span> <span>₹150</span>

//         </p>
//         <div className="rating">
//           <span class="stars"> ★★★★★</span> <span>8 Review</span>
//         </div>

//         {/* Main Image */}
//         <div className="main-image"> 
//           <img
//            src="/assets/productdetails/product.png"
//             alt="Product"
//           />
//         </div>

//         {/* Thumbnail Images */}
//         <div className="thumbnails">
//           <img src="/assets/productdetails/thumb1.png" alt="Thumb1" />
//           <img src="/assets/productdetails/thumb2.png" alt="Thumb2" />
//           <img src="/assets/productdetails/thumb3.png" alt="Thumb3" />
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="product-right" data-aos="fade-left">
//         <h3>Overview :</h3>
//         <table>
//           <tbody>
//             <tr><td>Price</td><td>125</td></tr>
//             <tr><td>Category</td><td>Lorem</td></tr>
//             <tr><td>Brand</td><td>Lore</td></tr>
//             <tr><td>Model</td><td>Spicy</td></tr>
//             <tr><td>Year</td><td>1999</td></tr>
//             <tr><td>Condition</td><td>Used</td></tr>
//             <tr><td>Hours</td><td>236 Hrs</td></tr>
//             <tr><td>SKU</td><td>960832</td></tr>
//           </tbody>
//         </table>

//         <div className="seller">
//           <h4>Seller :</h4>
//           <p>Sunfoods</p>
//           <p className="whatsapp"><i className="fab fa-whatsapp"></i> 082-541766-533</p>
//         </div>
//       </div>
//     </section>


//        <div className="desc-section" data-aos="fade-right" >
//       <div className="desc-left">
//         <h2>Description :</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//           luctus nec ullamcorper mattis, pulvinar dapibus leo. Pellentesque sed ante
//           egestas, lacinia elit sed, porta velit. Nam nisl risus, rutrum mattis
//           finibus non, consectetur at lectus. Pellentesque enim odio, euismod vel
//           vestibulum in, semper eu erat. Aliquam erat volutpat.
//         </p>

//         <ul>
//           <li>● Tipping load up to 3,300 lbs.</li>
//           <li>● Up to 49 horsepower and 7.4 mph</li>
//           <li>● Maximum height reach 18.1"</li>
//           <li>● Up to 1,699 lbs. lift</li>
//           <li>● Uses: Ideal for light- to medium-duty clearing</li>
//         </ul>
//       </div>


//       <div className="desc-right" data-aos="fade-left">
//   <div className="form-container">
//     <h3>Check Availability</h3>
//     <form onSubmit={handleAvailabilitySubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={availabilityForm.name}
//         onChange={handleAvailabilityChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={availabilityForm.email}
//         onChange={handleAvailabilityChange}
//         required
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone Number"
//         value={availabilityForm.phone}
//         onChange={handleAvailabilityChange}
//         required
//       />
//       <textarea
//         name="message"
//         placeholder="Hi I'm interested in this product. What is your best offer? Thanks"
//         rows="4"
//         value={availabilityForm.message}
//         onChange={handleAvailabilityChange}
//         required
//       ></textarea>
//       <button type="submit" disabled={submitting}>
//         {submitting ? "Sending..." : "Send Now"}
//       </button>
//     </form>
//     {feedbackMsg && (
//       <p
//         style={{
//           marginTop: '10px',
//           color: feedbackMsg.startsWith('Thank') ? 'green' : 'red',
//         }}
//       >
//         {feedbackMsg}
//       </p>
//     )}
//   </div>
// </div>

//     </div>

//  <div className="product-section" data-aos="fade-down" >
//       <div className="listing-container" data-aos="fade-up" data-aos-delay="200">
//         <div className="listing-header">
//           <p>You May also like :</p>
//         </div>

//         <div className="product-scroll" ref={scrollRef}>
//           {products.map((product) => (
//             <div className="product-card" key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>From {product.price}</p>
//               <div className="stars">★★★★★ <span>8 Review</span></div>
//               <button className="get-details-btn">Get Details</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }

// export default Product;

import React, { useEffect, useRef, useState } from 'react';
import { useSliders } from '../hooks/useSliders';
import { useParams, useNavigate } from 'react-router-dom';
import {
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs
} from "firebase/firestore";
import { db } from '../firebase';
import './ProductDetails.css';

function ProductDetails() {
    const { sliders } = useSliders();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [availabilityForm, setAvailabilityForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: "Hi I'm interested in this product. What is your best offer? Thanks",
  });
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
        document.title = `${docSnap.data().name} | Sunfoods`;
      } else {
        console.log('No such product!');
        // Optionally navigate away or show a not-found message here
      }
    }

    async function fetchRelated() {
      const q = query(collection(db, 'products'), limit(10));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRelatedProducts(items.filter(p => p.id !== id));
    }

    fetchProduct();
    fetchRelated();
  }, [id]);

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    setAvailabilityForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
// const handleAvailabilitySubmit = async (e) => {
//   e.preventDefault();
//   setSubmitting(true);
//   setFeedbackMsg("");

//   try {
//     // 1️⃣ Save request in Firestore
//     await addDoc(collection(db, "availabilityRequests"), {
//       ...availabilityForm,
//       timestamp: serverTimestamp(),
//       productName: product?.name || '',
//     });

//     // 2️⃣ Send email via backend API
//     await fetch("http://localhost:5000/api/contact", {  // ✅ make sure port matches your backend
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: availabilityForm.name,
//         email: availabilityForm.email,
//         title: `Availability Request: ${product?.name || 'Product'}`,
//         message: `
//           ${availabilityForm.message}
//           <br/><br/>
//           Phone: ${availabilityForm.phone}
//           <br/>
//           Product: ${product?.name || 'N/A'}
//         `
//       }),
//     });

//     setFeedbackMsg("Thank you! Your request has been submitted.");
//     setAvailabilityForm({
//       name: "",
//       email: "",
//       phone: "",
//       message: "Hi I'm interested in this product. What is your best offer? Thanks",
//     });
//   } catch (error) {
//     console.error("Error submitting availability request:", error);
//     setFeedbackMsg("Sorry, something went wrong. Please try again later.");
//   } finally {
//     setSubmitting(false);
//   }
// };


const handleAvailabilitySubmit  = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setFeedbackMsg("");

  try {
    const response = await fetch("https://sunfoods.bemotion.in/send_product_details.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: availabilityForm.name,
        email: availabilityForm.email,
        phone: availabilityForm.phone,
        productName: product?.name || "N/A",
        message: availabilityForm.message
      }),
    });

    const result = await response.json();
    if (result.status === "success") {
      setFeedbackMsg("Your request has been sent!");
      setAvailabilityForm({
        name: "",
        email: "",
        phone: "",
        message: "I would like to know more about this product."
      });
    } else {
      setFeedbackMsg(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    setFeedbackMsg("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, [relatedProducts]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <section>
      <div className="hero-img hero" data-aos="fade-down">
      <img src={sliders.product || '/assets/products/product-banner.png '}  alt="Delicious Banner"
          className="hero-banner" />
      </div>

      <section className="product-detail">
        <div className="product-left" data-aos="fade-right">
          <h1>{product.name}</h1>
          <p className="sold-info">{product.soldInfo || "5 Sold In Last 25 Hours"}</p>
          <p className="price">
            <span style={{ color: "#FFBE00" }}>From</span> <span>₹{product.price || 'N/A'}</span>
          </p>
          <div className="rating">
            <span className="stars">{renderStars(product.rating || 5)}</span> <span>{product.reviewsCount || 8} Review(s)</span>
          </div>

          <div className="main-image">
            <img src={product.image || "/assets/products/product1.png"} alt={product.name} />
          </div>

        <div className="thumbnails">
  {product.thumbnails && product.thumbnails.length > 0 ? (
    product.thumbnails.map((thumb, i) => (
      <img key={i} src={thumb} alt={`Thumbnail ${i + 1}`} />
    ))
  ) : (
    <p>No thumbnails available.</p>
  )}
</div>

        </div>

        <div className="product-right" data-aos="fade-left">
          <h3>Overview :</h3>
          <table>
            <tbody>
              <tr><td>Price</td><td>{product.price || 'N/A'}</td></tr>
              <tr><td>Category</td><td>{product.category || 'N/A'}</td></tr>
              <tr><td>Brand</td><td>{product.brand || 'N/A'}</td></tr>
              <tr><td>Pieces</td><td>{product.pieces || 'N/A'}</td></tr>
              <tr><td>Grams</td><td>{product.grams || 'N/A'}</td></tr>
            
            </tbody>
          </table>

          <div className="seller">
            <h4>Seller :</h4>
            <p>{product.seller?.name || "Unknown Seller"}</p>
            <p className="whatsapp"><i className="fab fa-whatsapp"></i> {product.seller?.whatsapp || "N/A"}</p>
          </div>
        </div>
      </section>

      <div className="desc-section" data-aos="fade-right">
        <div className="desc-left">
          <h2>Description :</h2>
          <p>{product.description || "No description available."}</p>
          {/* <ul>
            {product.features && product.features.length > 0 ? (
              product.features.map((feature, idx) => <li key={idx}>● {feature}</li>)
            ) : (
              <li>No features listed.</li>
            )}
          </ul> */}
        </div>

        <div className="desc-right" data-aos="fade-left">
          <div className="form-container">
            <h3>Check Availability</h3>
            <form onSubmit={handleAvailabilitySubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={availabilityForm.name}
                onChange={handleAvailabilityChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={availabilityForm.email}
                onChange={handleAvailabilityChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={availabilityForm.phone}
                onChange={handleAvailabilityChange}
                required
              />
           <textarea
  name="message"
  placeholder="Hi I'm interested in this product. What is your best offer? Thanks"
  rows="4"
  value={availabilityForm.message}
  onChange={handleAvailabilityChange}
  required
  style={{ color: "#aaa" }} // light gray text
></textarea>

              <button type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send Now"}
              </button>
            </form>
            {feedbackMsg && (
              <p
                style={{
                  marginTop: '10px',
                  color: feedbackMsg.startsWith('Thank') ? 'green' : 'red',
                }}
              >
                {feedbackMsg}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="product-section" data-aos="fade-down">
        <div className="listing-container" data-aos="fade-up" data-aos-delay="200">
          <div className="listing-header">
            <p>You May also like :</p>
          </div>

          <div className="product-scroll" ref={scrollRef}>
            {relatedProducts.map((prod) => (
              <div className="product-card" key={prod.id}>
                <img src={prod.image || "/assets/products/product1.png"} alt={prod.name} />
                <h3>{prod.name}</h3>
                <p>From ₹{prod.price}</p>
                <div className="stars">
                  {renderStars(prod.rating || 5)} <span>{prod.reviewsCount || 8} Review(s)</span>
                </div>
                <button
                  className="get-details-btn"
                  type="button"
                  onClick={() => navigate(`/product-details/${prod.id}`)}
                >
                  Get Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
